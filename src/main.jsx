import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route  } from "react-router";
import App from './screens/App.jsx'
import PokemonDetails from './screens/PokemonDetails.jsx'
import PokedexDetails from './screens/PokedexDetails.jsx'
import PageHeader from './components/pageHeader/pageHeader.jsx';
import Login from './screens/Login.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        
        <Route path="/app" element={
            <PageHeader>
            <App />
            </PageHeader>} />
        <Route path="/pokemon/:url" element={<PokemonDetails />} />
        <Route path="/pokedex/:id" element={<PokedexDetails />} />
    </Routes>
   
    </BrowserRouter>
,
)
