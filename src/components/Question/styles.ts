import styled, { keyframes } from 'styled-components'

const animateQuestion = keyframes`
 from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`

type ContentProps = {
    isAnswered: boolean;
    isHighlighted: boolean
}

// <div className={`question ${isAnswered ? 'answered' :  ''} ${isHighlighted && !isAnswered ? 'highlighted' :  ''}`}>

export const Content = styled.div<ContentProps>`

    background-color: ${({isHighlighted, isAnswered}) => !isAnswered && isHighlighted ? '#f4f0ff' : isHighlighted ? '#dbdcdd' : '#fefefe'};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    transition: all .6s;
    border: 1px solid ${({isHighlighted, isAnswered}) => isHighlighted && isAnswered ? 'transparent' : isHighlighted ? '#5AFD91' : 'transparent'};
    margin-bottom: 8px;

    animation: ${animateQuestion} 0.6s normal;


    p {
        color: #29292e;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

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
                color: ${({isHighlighted}) => isHighlighted ? '#29292e' : '#737380'};
                font-size: 14px;
            }
        }

        > div {
            display: flex;
            gap: 16px;
        }

        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: #737380;
                gap: 8px;

                transition: 0.6s ease;

                &.liked {
                    color: #5AFD91;

                    svg path {
                        stroke: #5AFD91;
                    }
                }
            }

            &:hover {
                filter: brightness(.6);
            }
        }
    }
`