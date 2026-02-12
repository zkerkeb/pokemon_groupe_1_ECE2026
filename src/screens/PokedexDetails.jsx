import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "./PokedexDetails.css";

const statColors = {
    HP: "#ff5555",
    Attack: "#f08030",
    Defense: "#f8d030",
    SpecialAttack: "#6890f0",
    SpecialDefense: "#78c850",
    Speed: "#f85888",
};


const PokedexDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);


    const deletePokemon = (id) => {
    axios
        .delete(`http://localhost:3000/pokemons/${id}`)
        .then((res) => {
            console.log("Pokemon supprimé :", res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log("Erreur lors de la suppression :", err);
        });
};

    useEffect(() => {
        axios
            .get(`http://localhost:3000/pokemons/${id}`)
            .then((res) => {
                setPokemon(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (!pokemon) return <p>Pokemon introuvable</p>;

    return (
        <div className="pokemon-detail">
            <button className="delete-button" onClick={() => deletePokemon(pokemon.id)}>
                Supprimer
            </button>
            <button className="back-button" onClick={() => navigate(-1)}>
                Retour
            </button>

            <div className="pokemon-detail-header">
                <h1>{pokemon.name.french}</h1>
                <span>#{pokemon.id}</span>
            </div>

            <div className="pokemon-detail-image">
                <img src={pokemon.image} alt={pokemon.name.french} />
            </div>

            <div className="pokemon-detail-types">
                {pokemon.type.map((t) => (
                    <span
                        key={t}
                        className={`type-${t.toLowerCase()}`}
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="pokemon-detail-names">
                <h3>Noms</h3>
                <p>Anglais : {pokemon.name.english}</p>
                <p>Japonais : {pokemon.name.japanese}</p>
                <p>Chinois : {pokemon.name.chinese}</p>
                <p>Français : {pokemon.name.french}</p>
            </div>

            <div className="pokemon-detail-stats">
                <h3>Statistiques</h3>
                {Object.entries(pokemon.base).map(([stat, value]) => (
                    <div className="stat-row" key={stat}>
                        <span className="stat-label">{stat}</span>
                        <div className="stat-bar-container">
                            <div
                                className="stat-bar"
                                style={{
                                    width: `${(value / 255) * 100}%`,
                                    backgroundColor: statColors[stat] || "#888",
                                }}
                            />
                        </div>
                        <span className="stat-value">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokedexDetails;
