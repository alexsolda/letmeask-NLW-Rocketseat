import { ButtonHTMLAttributes } from 'react';

import { ButtonContent } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ isOutlined = false, ...props }: { isOutlined?: boolean; } & ButtonProps) {
    return (
        <ButtonContent isOutlined={isOutlined} {...props}></ButtonContent>
        // <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props}></button>
    )
}