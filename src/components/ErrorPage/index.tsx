import {useHistory} from 'react-router-dom';
import {Content} from './styles';

import errorImg from '../../assets/images/error-page.svg';
import logoImgLight from '../../assets/images/logo.png';
import logoImgDark from '../../assets/images/logo-darkmode.png'

import {Button} from '../Button';
import { useContext } from 'react';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';


export function ErrorPage() {

    const {theme} = useContext(ThemeSwitcherContext);
    const history = useHistory();

    const handleErrorPageButton = () => {
        history.push('/');
    };

    return (
        <Content>
            <img className='logo' src={theme.id === 'light' ? logoImgLight : logoImgDark} alt='Logo com a palavra: Let me ask.'/>
            <h2>Acesso restrito ao proprietário dessa sala.</h2>
            <img src={errorImg} alt='Página não encontrada - Imagem representando um cabo desconectado com pessoas tentando reconectá-lo' />
            <Button onClick={handleErrorPageButton}>Voltar</Button>
        </Content>
    )
}