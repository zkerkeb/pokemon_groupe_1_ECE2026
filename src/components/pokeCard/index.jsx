import { useEffect,useState, useRef } from "react";
import { Link } from "react-router";
import './index.css';

import usePokemon from "../../hooks/usePokemon.jsx";

const PokeCard = ({ pokemon }) => {
    const {pokeState, loading} = usePokemon(pokemon.url);
    const audioRef = useRef(null);

    return (
        <Link to={`/pokemon/${encodeURIComponent(pokemon.url)}`}>
        <div className="poke-card">
            <div className="poke-title-container">
                <span>{pokeState.name}</span>
            </div>
            <div className="poke-image-container"> 
            <img className="poke-image" src={pokeState.sprites?.other["official-artwork"]?.front_default} alt={pokeState.name} />
            </div>
            <div className="type-container">
                {pokeState.types?.map((typeInfo) => {
                    return (
                        <span className={`type-font type-${typeInfo.type.name}`}>{typeInfo.type.name} </span>
                    )
                })}
            </div>
            <audio ref={ref => audioRef.current = ref} src={pokeState?.cries?.latest} />
                
            <button onClick={() => audioRef.current.play()}>Écouter le cri</button>
        </div>
        </Link>
    );
}

export default PokeCard;