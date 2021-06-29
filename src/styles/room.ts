import styled from 'styled-components';

export const Wrapper = styled.div`
    header {
        padding: 24px;
        border-bottom: 1px solid #1efc68;

        .content {
            max-width: 1120px;
            margin: 0 auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 45px;
            }

            > div {
                display: flex;
                gap: 16px;

                >button {
                    height: 40px;
                }
            }
        }
    }

    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin-top: 32px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: #29292e;
            }

            span {
                margin-left: 16px;
                background-color: #5AFD91;
                border-radius: 9999px;
                padding: 8px 16px;
                color: #FFF;
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                width: 100%;
                padding: 16px;
                border-radius: 8px;
                background-color: #fefefe;
                box-sizing: 0 2px 12px rgba(0,0,0,.4);
                resize: vertical;
                min-height: 130px;
                border: 0;
                transition: all .6s;
                outline: transparent;

                &:focus {
                    outline: 1px solid #1efc68;
                }
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        border: 2px solid #5AFD91;
                    }

                    > span {
                        margin-left: 8px;
                        color: #29292e;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }

                span {
                    font-size: 14px;
                    color: #737380;
                    font-weight: 500;

                    button {
                        background-color: transparent;
                        border: 0;
                        color: #5AFD91;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 32px;
        }
    }
`