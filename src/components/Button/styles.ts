import styled from 'styled-components';

type ButtonProps = {
    isOutlined?: boolean
}

export const ButtonContent = styled.button<ButtonProps>`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: ${({ isOutlined }) => isOutlined ? '#FFF' : '#1efc68'};
    color: ${({ isOutlined }) => isOutlined ? '#1efc68' : '#FFF'};
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: ease .6s;

    img {
        margin-right: 8px;
    }

    &:not(disabled):hover {
        background-color: #1efc68;
        color: #FFF;
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`