import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Adicione essa linha
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Adicione o BrowserRouter aqui */}
      <App />
    </BrowserRouter> {/* E feche ele aqui */}
  </StrictMode>,
)