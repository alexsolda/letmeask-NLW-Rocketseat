import { useParams, useHistory } from 'react-router-dom';

import LogoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}

export function AdminRoom() {

    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { title, questions } = useRoom(roomId);

    const handleDeleteQuestion = async (question: string) => {
       if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${question}`).remove();
       }
    };

    const handleEndRoom = async () => {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        });

        history.push('/');
    };

    return (
        <div id='page-room'>
            <header>
                <div className="content">
                    <img src={LogoImg} alt='Logo escrito let me ask com um balão de conversa em volta' />
                    <div>
                        <RoomCode code={roomId} />
                        <Button 
                        isOutlined
                        onClick={handleEndRoom}
                        >Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta{questions.length > 1 && 's'}</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        >
                            <button 
                            type='button'
                            onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Icone de lixeira" />
                            </button>
                        </Question>
                    ))}
                </div>
            </main>
        </div>
    );
}