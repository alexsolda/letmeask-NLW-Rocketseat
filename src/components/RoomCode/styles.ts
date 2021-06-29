import styled from 'styled-components';

export const CodeButton  = styled.button`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background-color: #FFF;
    border: 1px solid #5AFD91;
    cursor: pointer;

    display: flex;

    &:hover {
        border: 1px solid #1efc68;
    }

    div {
        background-color: #5AFD91;
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #1efc68;
        }
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 230px;
        font-size: 14px;
        font-weight: 500;
    }
`