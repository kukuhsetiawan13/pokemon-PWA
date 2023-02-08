import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/PokemonCard';


function App() {

  const [pokemons, setPokemons] = useState([])
  const [cancel, setCancel] = useState()


  const fetchPokemon = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
      })
      fetchPokemonDetails(data.results)
    } catch(err) {
      console.log(err)
    }
  }

  const fetchPokemonDetails = async (arr) => {
    arr.map(async (pokemon) => {
      try {
        const { data } = await axios ({
          method: 'GET',
          url: pokemon.url
        })
        setPokemons((prevState) => [...prevState, data])
      } catch(err) {
        console.log(err)
      }
    })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])

  return (
    <div className='mt-10 p-2'>
      <h1 className="text-3xl font-bold text-sky-900">
      Pokedex
      </h1>
      <div className='flex justify-center flex-wrap gap-3 mt-10'>
        <PokemonCard pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
