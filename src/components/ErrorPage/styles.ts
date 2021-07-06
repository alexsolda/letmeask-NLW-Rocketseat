import styled from 'styled-components';

export const Content = styled.div`

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    .logo {
        width: 150px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        max-width: 380px;
    }

    h2 {
        color: ${({theme}) => theme.colorSecondary};
    }
`