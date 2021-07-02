import { useContext } from 'react';
import { Switcher } from './styles';

import darkIcon from '../../assets/images/dark-mode.png';
import lightIcon from '../../assets/images/light-mode.png';

import { light, dark } from '../../utils/lightTheme';

import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';

export function ThemeSwitcher() {

    const { theme, handleThemeSwitcher } = useContext(ThemeSwitcherContext);

    const handleToggleTheme = () => {

        if (theme.id === 'light') {
            handleThemeSwitcher(dark);
        } else {
            handleThemeSwitcher(light);
        }
    }

    return (
        <Switcher onClick={handleToggleTheme}>
            <img src={theme.id === 'dark' ? lightIcon : darkIcon} alt="" />
        </Switcher>
    )
}