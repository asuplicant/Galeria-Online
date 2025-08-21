import "./Card.css"
import imgCard from "../../assets/img/imagemCard.jpg"

import imgPen from '../../assets/img/pen.svg'
import imgTrash from '../../assets/img/trash.svg'

export const Card = ({ tituloCard }) => {
    return (
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card." />
                <div className='icons'>
                    <img src={imgPen} alt="Ícone de caneta para realizar uma alteração." />
                    <img src={imgTrash} alt="Ícone de uma lixeira para realizar a exclusão." />
                </div>
            </div>
        </>
    )
}