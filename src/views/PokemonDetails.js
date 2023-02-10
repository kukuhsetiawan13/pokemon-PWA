import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Label from '../components/Label'
import About from '../components/PokemonDetails/About'
import BaseStats from '../components/PokemonDetails/BaseStats'
import Evolution from '../components/PokemonDetails/Evolution'
import Moves from '../components/PokemonDetails/Moves'
import { FETCH_ALL_POKEMONS_URL } from '../store/url'
import { capitalizeLetter } from '../utils/capitalizeLetter'
import { defineBackground } from '../utils/defineBackground'
import { formatOrder } from '../utils/formatOrder'
import pokemonBall from '../data/pokemon-ball.json'
import Lottie from "lottie-react";


export default function PokemonDetails() {

  const params = useParams()

  const [pokemon, setPokemon] = useState({})
  const [section, setSection] = useState('About')
  const [loading, setLoading] = useState(true)

  const fetchPokemonDetails = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${FETCH_ALL_POKEMONS_URL}/${params.name}`
      })
      setPokemon(data)
      setLoading(false)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchPokemonDetails()
  }, [])

  const changeSection = (section) => {
    setSection(section)
  }

  return (
    <>
    {loading &&
      <div className='absolute flex w-full h-full justify-center items-center'>
        <Lottie className='z-20 w-48 h-48 md:w-96 md:h-96' animationData={pokemonBall} loop={true} />
      </div> 
    }
    <div className={`bg-red-400 h-screen w-full ${pokemon?.types && pokemon.types.length > 0 ? defineBackground(pokemon?.types) : ''}`}>
      <div className='bg-pokeball-details h-2/5'>
        <div className='flex justify-between py-5 px-2 xxs:px-8'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-white text-4xl font-extrabold text-clip overflow-hidden'>
              {pokemon.name ? capitalizeLetter(pokemon?.name) : ''}
            </h2>
            <div className='flex gap-3'>
              {pokemon.types?.map(type => {
                return (
                  <Label key={type.type.name} px={4} name={type.type.name} />
                  // <div className='bg-yellow-600 text-white text-sm text-center rounded-2xl h-min py-1 px-4'>{type.type.name}</div>
                )
              })}
            </div>
          </div>
          <h4 className='text-white my-auto font-black'>
            #{formatOrder(pokemon.order)}
          </h4>
        </div>
        <div className='flex justify-center'>
          <img className='picture-details' alt='pokemon-image' src={pokemon.sprites?.front_default ? pokemon.sprites.front_default : ''}/>
        </div>
      </div>
      <div className='bg-white h-full rounded-t-3xl pt-10 px-6 lg:px-52'>
        <div className='justify-between flex gap-2 xxs:gap-10 mb-5'>
          <h3 onClick={() => changeSection('About')} className={`font-medium pb-5 cursor-pointer ${section === 'About'? 'border-b-2 border-black text-black' : 'text-slate-500'}`}>About</h3>
          <h3 onClick={() => changeSection('Base Stats')} className={`font-medium pb-5 cursor-pointer ${section === 'Base Stats'? 'border-b-2 border-black text-black' : 'text-slate-500'}`}>Base Stats</h3>
          <h3 onClick={() => changeSection('Evolution')} className={`font-medium pb-5 cursor-pointer ${section === 'Evolution'? 'border-b-2 border-black text-black' : 'text-slate-500'}`}>Evolution</h3>
          <h3 onClick={() => changeSection('Moves')} className={`font-medium pb-5 cursor-pointer ${section === 'Moves'? 'border-b-2 hover:border-black text-black' : 'text-slate-500'}`}>Moves</h3>
        </div>
        {section === 'About' &&
          <About pokemon={pokemon}/>
        }
        {section === 'Base Stats' &&
          <BaseStats stats={pokemon.stats}/>
        }
        {section === 'Evolution' &&
          <Evolution pokemonSpeciesUrl={pokemon.species.url}/>
        }
        {section === 'Moves' &&
          <Moves types={pokemon.types} moves={pokemon.moves}/>
        }
      </div>
    </div>
    </>
  )
}
