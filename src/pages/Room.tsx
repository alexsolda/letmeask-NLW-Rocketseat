import { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LogoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
    id: string;
}

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}>

export function Room() {

    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    const roomId = params.id;

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions;

            const parcedQuestion = Object.entries(firebaseQuestions ?? {}).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parcedQuestion);

        });

    }, [roomId]);

    const handleSendQuestion = async (event: FormEvent) => {

        event.preventDefault();

        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            throw new Error('You must be logged in');
        }

        const question = {
            content: newQuestion,
            author: {
                nome: user.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');

    };

    return (
        <div id='page-room'>
            <header>
                <div className="content">
                    <img src={LogoImg} alt='Logo escrito let me ask com um balão de conversa em volta' />
                    <RoomCode code={roomId} />
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta{questions.length > 1 && 's'}</span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder='Qual a sua dúvida?'
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ?
                            <div className='user-info'>
                                <img src={user.avatar} alt={`Foto de perfil do ${user.name}`} />
                                <span>{user.name}</span>
                            </div>
                            :
                            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        }
                        <Button type='submit' disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>
            </main>

            {JSON.stringify(questions)}
        </div>
    );
}