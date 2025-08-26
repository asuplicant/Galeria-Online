import './Home.css'
import { Botao } from '../../components/botao/Botao'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    function navegarParaGaleria () {
        navigate('/galeria')
    }

    return (
        <>
            <div className="container">
                <h2>Bem-vindo à</h2>
                <h1>Galeria Online</h1>
                <Botao nomeBotao="Entrar" funcaoDoBotao={navegarParaGaleria}/>
            </div>

        </>
    )
}