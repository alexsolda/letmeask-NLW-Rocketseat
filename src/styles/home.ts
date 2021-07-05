import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    @media (max-width: 870px) {
        flex-direction: column;
    }

    @media (max-width: 414px) {
       height: auto;
    }
   

    aside {
        flex: 6;

        background-color: ${({theme}) => theme.primary};
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

        @media (max-width: 870px) {
            align-items: center;
            padding: 10px;
            flex: 3;
    }

        img {
            max-width: 320px;

            @media (max-width: 870px) {
                width: 150px;
                }
                
                @media (max-width: 414px) {
                    width: 100px;
                }

                @media (max-width: 360px) {
                    width: 80px;
                }
            }

        strong {
            font: 400 36px "Poppins", sans-serif;
            line-height: 42px;
            margin-top: 16px;

            @media (max-width: 870px) {
                font-size: 30px;
            }

            @media (max-width: 414px) {
               font-size: 24px;
                text-align: center;
            }

            @media (max-width: 360px) {
                font-size: 22px;
            }
        }

        p{
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;

            @media (max-width: 870px) {
                font-size: 16px;
            }

            @media (max-width: 414px) {
               font-size: 12px;
            }
        }
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({theme}) => theme.secondary};
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;

            @media (max-width: 414px) {
               width: 200px;
               margin-top: 20px;
            }
        } 

        h2 {
            font-size: 24px;
            margin: 64px 0 24px;
            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.colorSecondary};
        }

        form {
            input {
                height: 50px;
                border-radius: 8px;
                padding: 0 16px;
                background-color: #FFF;
                border: 1px solid #a8a8e3;
                outline: 1px solid #5AFD91;
                transition: all .6s;

                &:focus {
                    border: 1px solid #1efc68;
                }
            }

            button {
                margin-top: 16px;
            }

            button, input {
                width: 100%;
            }
        }

        p {
            font-size: 14px;
            color: #737380;
            margin-top: 16px;

            a {
                color: #1efc68;
            }
        }
    }

    .create-room {
        margin-top: 64px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background-color: #ea4335;
        color: #FFF;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: ease .6s;

        @media (max-width: 414px) {
            margin-top: 36px;
        }

        @media (max-width: 360px) {
            font-size: 14px;
        }

        img {
            margin-right: 8px;

            @media (max-width: 360px) {
                height: 18px;
            }
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    .separator {
        font-size: 14px;
        color: #a8a8e3;

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background-color: #a8a8e3;
            margin-right: 16px;
        }
        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background-color: #a8a8e3;
            margin-left: 16px;
        }
    }`