import LogoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

import '../styles/room.scss';

export function Room() {
    return (
        <div id='page-room'>
            <header>
                <div className="content">
                    <img src={LogoImg} alt='Logo escrito let me ask com um balão de conversa em volta' />
                    <div>Codigo</div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea
                        placeholder='Qual a sua dúvida?'
                    />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Button type='submit'>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}