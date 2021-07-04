import { useParams, useHistory } from 'react-router-dom';

import logoImgLight from '../../assets/images/logo.png';
import logoImgDark from '../../assets/images/logo-darkmode.png';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

import { useRoom } from '../../hooks/useRoom';

import { Wrapper } from '../../styles/room';
import { database } from '../../services/firebase';
import { useContext } from 'react';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';

type RoomParams = {
    id: string;
}

export function AdminRoom() {

    const { theme } = useContext(ThemeSwitcherContext);

    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { title, questions } = useRoom(roomId);

    const handleDeleteQuestion = async (questionId: string) => {
        if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    };

    const handleEndRoom = async () => {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        });

        history.push('/');
    };

    const handleCheckQuestionAsAnswered = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        });
    };

    const handleHighlightedQuestion = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true
        });
    };

    return (
        <Wrapper>
            <header>
                <div className="content">
                    <img src={theme.id === 'dark' ? logoImgDark : logoImgLight} alt='Logo escrito let me ask com um balão de conversa em volta' />
                    <div>
                        <RoomCode code={roomId} />
                        <div className="menu--controller">
                            <Button
                                isOutlined
                                onClick={handleEndRoom}
                            >Encerrar sala</Button>
                            <ThemeSwitcher />
                        </div>
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
                            isAnswered={question.isAnswered}
                            isHighlighted={question.isHighlighted}
                        >
                            {!question.isAnswered && (
                                <>
                                    <button
                                        type='button'
                                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                    >
                                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                                    </button>

                                    <button
                                        type='button'
                                        onClick={() => handleHighlightedQuestion(question.id)}
                                    >
                                        <img src={answerImg} alt="Destacar a pergunta sendo respondida" />
                                    </button>
                                </>
                            )}

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
        </Wrapper>
    );
}