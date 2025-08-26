import './App.css'
import { Galeria } from './pages/galeria/Galeria'
import { Home }  from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'; // Importe os componentes de rota

function App() {

  return (
    <>
    {/* o routes pode ser entendido como uma "div" para as rotas
    o route é uma tag específica que roda a página através do elemento inserido na url, sendo esse elemento o mesmo inserido entre aspas */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* aqui ele mostra que quando você colocar esse elemento dentro das aspas na url ele vai ir para tal página */}
        <Route path="/galeria" element={<Galeria/>} />
        {/* aqui ele mostra que quando você colocar esse elemento dentro das aspas na url ele vai ir para tal página */}
      </Routes>
    </>
  )
}

export default App