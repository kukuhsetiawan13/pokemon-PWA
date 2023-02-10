import React from 'react'
import { capitalizeLetter } from '../utils/capitalizeLetter'

export default function PokemonCard({pokemons}) {
  return (
    <>
    {pokemons.map(pokemon => {
        return (
            <div key={pokemon.name} className='rounded-2xl bg-blue-500 h-32 py-2 pl-4 bg-red-200'>
                <h2 className='text-white font-extrabold'>{capitalizeLetter(pokemon.name)}</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1 mt-2'>
                        {pokemon.types.map(type => {
                            return (
                                <div className='bg-yellow-200 text-center rounded-2xl h-min p-1'>{type.type.name}</div>
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
