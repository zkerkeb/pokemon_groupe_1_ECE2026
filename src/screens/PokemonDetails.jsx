
import { useNavigate, useParams }  from "react-router";
import usePokemon from "../hooks/usePokemon.jsx";

const PokemonDetails = () => {
    const params = useParams();
    console.log("Paramètres de l'URL:", params);
    const navigate = useNavigate();
    const {pokeState, loading} = usePokemon(decodeURIComponent(params.url));

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={goBack}>Retour</button>
            <h1>Pokemon Details Page {loading ? "Loading..." : pokeState.name}</h1>
        </div>
    );
}

export default PokemonDetails;