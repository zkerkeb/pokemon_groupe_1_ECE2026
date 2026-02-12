import './App.css'

import Title from '../components/title'
import Counter from '../components/counter'
import PokeList from '../components/pokelist'
import {Link} from "react-router" 
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Pokedex from '../components/pokedex'

function App() {
  const navigate = useNavigate();

  useEffect(() => {

    // verification du token

    // setTimeout(() => {
    //   navigate("/pokemon-details");
    // }, 2000);

  }, [])

  return (
    <div>
      {/* <Title  label="Titre 1" />
      <Title label="Titre 2" />
      <Title label="Titre 3" />
      <Title label="Titre 4" />
      <Title/> */}
      {/* <Counter/> */}
      <Link to="/pokemon-details">Détails du Pokémon</Link>
      <Pokedex />
    </div>
  )
}

export default App
