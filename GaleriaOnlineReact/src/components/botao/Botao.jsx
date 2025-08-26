import "./Botao.css"

export const Botao = ({ nomeBotao, funcaoDoBotao }) => {
    return (
        <button className="botao" onClick={funcaoDoBotao} type="submit">
            {nomeBotao}
        </button>
    )
}   