import { FormEvent, useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';

import illustrationImg from '../../assets/images/auth-bg.png';
import logoImgLight from '../../assets/images/logo.png'
import logoImgDark from '../../assets/images/logo-darkmode.png'

import {Button} from '../../components/Button';
import {Container} from '../../styles/home';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';

export function NewRoom() {

    const {theme} = useContext(ThemeSwitcherContext);

    const {user} = useAuth();
    const [newRoom, setNewRoom] = useState('');
    const history = useHistory();

    const handleCreateRoom = async (event: FormEvent) => {
        event.preventDefault();

        if(newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id  
        })

        history.push(`/admin/rooms/${firebaseRoom.key}/${user?.id}`);

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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type='text'
                            placeholder='Nome da sala'
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link></p>
                </div>
            </main>
        </Container>
    )
}