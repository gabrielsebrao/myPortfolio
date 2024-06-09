import '../styles/CdPlayer.css'
import sound from '../assets/songs/00-SoulGroove.mp3'

export default function CdPlayer() {

    function play() {
        new Audio(sound).play()
    }

    return (
        <div className="CdPlayer">
            <div className="CdPlayerDescription">
                <h2>Nome da música</h2>
                <i>Nome do Autor</i>
            </div>

            <div className="CdPlayerDuracao">
                <div className="CdPlayerDuracaoBarra">
                    <progress value="0.5" max="1"></progress>
                    <div className="CdPlayerDuracaoBarraPonto"></div>
                </div>
                <div className="CdPlayerDuracaoTempo">
                    <p className="CdPlayerDuracaoTempoInicio">0:00</p>
                    <p className="CdPlayerDuracaoTempoFim">0:00</p>
                </div>
            </div>

            <div className="CdPlayerBotoes">
                <img src="https://cdn-icons-png.freepik.com/512/2/2392.png" alt="previous play" />
                <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" alt="play icon" onClick={play}/>
                <img src="https://freeiconshop.com/wp-content/uploads/edd/next-circle-outline.png" alt="next icon" />
            </div>

        </div>
    )
}