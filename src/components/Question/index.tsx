import { ReactNode } from 'react';

import { Content } from './styles';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false
}: QuestionProps) {
    return (

        <Content isAnswered={isAnswered} isHighlighted={isHighlighted}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={`Foto de perfil do ${author.name}`} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </Content >
    );
}