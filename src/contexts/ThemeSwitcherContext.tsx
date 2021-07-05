import { useEffect } from 'react';
import { useState, createContext, ReactNode } from 'react';
import { light } from '../utils/lightTheme';

type NewTheme = {
    id: string;
    primary: string;
    secondary: string;
    colorPrimary: string;
    colorSecondary: string;
    colorSpotlight: string;
    offColor: string;
}

type ThemeCtx = {
    theme: NewTheme;
    handleThemeSwitcher: any;
}

type ThemeSwitcherProps = {
    children: ReactNode;
}

const themeStorage: any = localStorage.getItem('theme');

export const ThemeSwitcherContext = createContext<ThemeCtx>({theme: JSON.parse(themeStorage) || light, handleThemeSwitcher: () => {}});

export function ThemeSwitcherProvider({ children }: ThemeSwitcherProps) {

    const [theme, setTheme] = useState(JSON.parse(themeStorage) || light);

    const handleThemeSwitcher = (newTheme: NewTheme) => setTheme(newTheme);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])


    return (
        <ThemeSwitcherContext.Provider value={{theme: theme, handleThemeSwitcher}}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}