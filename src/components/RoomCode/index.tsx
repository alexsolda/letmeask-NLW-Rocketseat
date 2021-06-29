import copyImg from '../../assets/images/copy.svg';

import {CodeButton} from './styles';

type RoomCodeProps = {
    code: string;
}

export function RoomCode({code}: RoomCodeProps) {

    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(code)
    };

    return (
        <CodeButton onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Icone de copiar um texto" />
            </div>
            <span>Sala #{code}</span>
        </CodeButton>
    );
}