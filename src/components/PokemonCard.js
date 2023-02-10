import React from 'react'
import { useNavigate } from 'react-router-dom'
import { capitalizeLetter } from '../utils/capitalizeLetter'
import { defineBackground } from '../utils/defineBackground'
import Label from './Label'

export default function PokemonCard({pokemons}) {

    const navigate = useNavigate()

    const checkDetails = (name) => {
        navigate(`/details/${name}`)
    }

  return (
    <>
    {pokemons.length > 18 &&
    pokemons.map(pokemon => {
        return (
            <div key={pokemon.name} onClick={() => checkDetails(pokemon.name)} className={`rounded-2xl cursor-pointer h-32 py-2 pl-4 bg-pokeball ${defineBackground(pokemon.types)}`}>
                <h2 className='text-white font-extrabold truncate'>{capitalizeLetter(pokemon.name)}</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1 mt-2'>
                        {pokemon.types.map(type => {
                            return (
                                <Label px={4} name={type.type.name}/>
                            )
                        })}
                    </div>
                    <img className='picture-card' src={pokemon.sprites.front_default}/>
                </div>
            </div>
        )
    })}
    </>
  )
}
