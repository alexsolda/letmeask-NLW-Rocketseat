import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LogOff } from './styles';

import logOutImg from '../../assets/images/logout.png';

export function LogOffButton() {

    const { signOutGoogle } = useAuth();

    const history = useHistory();

    const handleLogOut = async () => {
        await signOutGoogle();

        history.push('/');
    };

    return (
        <LogOff onClick={handleLogOut}>
            <img src={logOutImg} alt="Botão de sair com ícone representando uma saída" />
        </LogOff>
    )
}