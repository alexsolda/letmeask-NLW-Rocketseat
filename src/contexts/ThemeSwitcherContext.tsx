import { useState, createContext, ReactNode } from 'react';
import { light } from '../utils/lightTheme';

type NewTheme = {
    id: string;
    primary: string;
    secondary: string
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

export const ThemeSwitcherContext = createContext<ThemeCtx>({theme: light, handleThemeSwitcher: () => {}});

export function ThemeSwitcherProvider({ children }: ThemeSwitcherProps) {

    const [theme, setTheme] = useState(light);

    const handleThemeSwitcher = (newTheme: NewTheme) => setTheme(newTheme);


    return (
        <ThemeSwitcherContext.Provider value={{theme: theme, handleThemeSwitcher}}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}