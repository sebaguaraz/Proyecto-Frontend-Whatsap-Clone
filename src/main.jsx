import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//  importamos un componente llamado BrowserRouter, habilita las herramientas dentro de nuestra App
import { BrowserRouter } from 'react-router';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    // Habilita usar las herramientas de REACT-ROUTER dentro del componente App, sino lo configuramos las rutas no se pueden hacer
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
