import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode({code}: RoomCodeProps) {

    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(code)
    };

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Icone de copiar um texto" />
            </div>
            <span>Sala #{code}</span>
        </button>
    );
}