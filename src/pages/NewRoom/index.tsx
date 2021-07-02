import { FormEvent, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import illustrationImg from '../../assets/images/auth-bg.png';
import logoImg from '../../assets/images/logo.png'

import {Button} from '../../components/Button';
import {Container} from '../../styles/home';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

export function NewRoom() {

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

        history.push(`/rooms/${firebaseRoom.key}`);

    };

    return (
        <Container>
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando troca de perguntas e respostas' />
                <strong>Crie salas de Q&amp; ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='Logo escrito let me ask com um balão de conversa em volta' />
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