
import { useEffect, useState } from "react";

const usePokemon = (url) => {
    const [pokeState, setPokeState] = useState({});
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setPokeState(data);
                    console.log("Détails du Pokémon reçus:", data);
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des détails du Pokémon:", error);
                }).finally(() => {
                    setLoading(false);
                });
        }, [url])

    return { pokeState, loading };
}

export default usePokemon;