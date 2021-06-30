import {Switcher} from './styles';

import darkIcon from '../../assets/images/dark-mode.png';
import lightIcon from '../../assets/images/light-mode.png';

export function ThemeSwitcher() {
    return (
        <Switcher>
            <img src={lightIcon} alt="" />
        </Switcher>
    )
}