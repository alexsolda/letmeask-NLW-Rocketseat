import { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/auth-bg.png';
import logoImgLight from '../../assets/images/logo.png'
import logoImgDark from '../../assets/images/logo-darkmode.png'
import googleIconImg from '../../assets/images/google-icon.svg'
import { Container } from '../../styles/home';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';


export function Home() {


    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    const {theme} = useContext(ThemeSwitcherContext);

    const handleCreateRoom = async () => {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new');
    };

    const handleJoinRoom = async (event: FormEvent) => {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = database.ref(`rooms/${roomCode}`).get();

        if (!(await roomRef).exists()) {
            alert('erro');
            return;
        }

        if ((await roomRef).val().endedAt) {
            alert('Room already closed!');
            return;
        }

        history.push(`/rooms/${roomCode}`);
    };

    return (
        <Container>
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando troca de perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={theme.id === 'light' ? logoImgLight : logoImgDark} alt='Logo escrito let me ask com um balão de conversa em volta' />
                    <button className='create-room' onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt='Logo do google' />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type='text'
                            placeholder='digite o código da sala'
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </Container>
    )
}