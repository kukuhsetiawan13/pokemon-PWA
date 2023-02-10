import React from 'react'
import { capitalizeLetter } from '../utils/capitalizeLetter'

export default function PokemonCard({pokemons}) {


    const defineBackground = (arr) => {
        console.log(arr)
        if(arr.find(el => el.type?.name === 'grass')) return 'bg-green'
        else if(arr.find(el => el.type?.name === 'fire')) return 'bg-red'
        else if(arr.find(el => el.type?.name === 'water')) return 'bg-blue'
        else if(arr.find(el => el.type?.name === 'electric')) return 'bg-yellow'
        else if(arr.find(el => el.type?.name === 'bug')) return 'bg-dark-green'
        else if(arr.find(el => el.type?.name === 'flying')) return 'bg-light-blue'
        else if(arr.find(el => el.type?.name === 'poison')) return 'bg-purple'
        else if(arr.find(el => el.type?.name === 'fairy')) return 'bg-pink'
        else if(arr.find(el => el.type?.name === 'ground')) return 'bg-brown'
        else if(arr.find(el => el.type?.name === 'rock')) return 'bg-maroon'
        else if(arr.find(el => el.type?.name === 'normal')) return 'bg-normal'
        else if(arr.find(el => el.type?.name === 'psychic')) return 'bg-light-pink'
        else if(arr.find(el => el.type?.name === 'fighting')) return 'bg-orange'
        else if(arr.find(el => el.type?.name === 'fighting')) return 'bg-orange'
        else if(arr.find(el => el.type?.name === 'dark')) return 'bg-black'
        else if(arr.find(el => el.type?.name === 'ghost')) return 'bg-dark-purple'
        else if(arr.find(el => el.type?.name === 'steel')) return 'bg-cyan'
    }

  return (
    <>
    {pokemons.length > 18 &&
    pokemons.map(pokemon => {
        return (
            <div key={pokemon.name} className={`rounded-2xl cursor-pointer h-32 py-2 pl-4 bg-pokeball ${defineBackground(pokemon.types)}`}>
                <h2 className='text-white font-extrabold'>{capitalizeLetter(pokemon.name)}</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1 mt-2'>
                        {pokemon.types.map(type => {
                            return (
                                <div className='bg-yellow-600 text-white text-center rounded-2xl h-min py-1 px-2'>{type.type.name}</div>
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
