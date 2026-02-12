import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/pokemons'
        }).then((res) => {  
            setPokemons(res.data.results);
            setTotalPages( Math.ceil(res.data.total / 20) );
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })


    }, [])

    return(
        <div>
                <h1>Bienvenue dans le Pokedex</h1>
                <ul>    

                    {pokemons.map((pokemon) => (
                        <li key={pokemon.id}>
                            <Link to={`/pokedex/${pokemon.id}`}>{pokemon.name.french}</Link>
                        </li>
                    ))}
                    {new Array(totalPages).fill(0).map((_, index) => (
                        <button key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
                    ))}
                </ul>
        </div>
    )
}

export default Pokedex