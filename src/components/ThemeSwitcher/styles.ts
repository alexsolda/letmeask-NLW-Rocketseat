import styled from 'styled-components';

export const Switcher = styled.div`
    height: 40px;
    border: 1px solid #5AFD91;
    border-radius: 8px;
    background-color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;

    cursor: pointer;

    &:hover {
        img {
            transform: translateY(-3px);
        }
    }

    img {
        height: 25px;
        width: auto;

        transition: all .6s;
    }
`