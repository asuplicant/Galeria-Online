import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Galeria from "./../pages/galeria/Galeria";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/Galeria" element={Galeria} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;