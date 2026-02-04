import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route  } from "react-router";
import App from './screens/App.jsx'
import PokemonDetails from './screens/PokemonDetails.jsx'
import PageHeader from './components/pageHeader/pageHeader.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
            <PageHeader>
            <App />
            </PageHeader>} />
        <Route path="/pokemon/:url" element={<PokemonDetails />} />
    </Routes>
   
    </BrowserRouter>
,
)
