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
import { formatOrder } from '../utils/formatOrder'


export default function PokemonDetails() {

  const params = useParams()

  const [pokemon, setPokemon] = useState({})
  const [section, setSection] = useState('About')

  const fetchPokemonDetails = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${FETCH_ALL_POKEMONS_URL}/${params.name}`
      })
      setPokemon(data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPokemonDetails()
  }, [])

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon]) // remove later

  const changeSection = (section) => {
    setSection(section)
  }

  return (
    <div className='bg-red-400 h-screen'>
      <div className='bg-pokeball h-2/5'>
        <div className='flex justify-between py-5 px-8'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-white text-4xl font-extrabold'>
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
        <img src={pokemon.sprites?.front_default ? pokemon.sprites.front_default : ''}
          
        />
      </div>
      <div className='bg-white h-full rounded-t-3xl pt-10 px-6'>
        <div className='justify-between flex gap-10 mb-5'>
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
          <Moves moves={pokemon.moves}/>
        }
      </div>
    </div>
  )
}
