import { useEffect,useState, useRef } from "react";
import './index.css';

const PokeCard = ({ pokemon }) => {
    const [pokeState, setPokeState] = useState({});
    const audioRef = useRef(null);

    useEffect   (() => {
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                setPokeState(data);
                console.log("Détails du Pokémon reçus:", data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des détails du Pokémon:", error);
            });
    }, [pokemon]);




    return (
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
    );
}

export default PokeCard;