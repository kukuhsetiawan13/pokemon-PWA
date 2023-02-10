import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { capitalizeLetter } from '../../utils/capitalizeLetter'

export default function Evolution({pokemonSpeciesUrl}) {

    const [evolutionChain, setEvolutionChain] = useState({})

    const fetchSpecies = async () => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: pokemonSpeciesUrl
            })
            fetchEvolutionChain(data?.evolution_chain?.url)
        } catch(err) {
            console.log(err)
        }
    }

    const fetchEvolutionChain = async (url) => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: url
            })
            setEvolutionChain(data)
        } catch(err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        fetchSpecies()
    }, [])

  return (
    <div className='flex justify-between sm:px-32 lg:gap-16 xl:px-80'>
        <h4>{evolutionChain.chain?.species?.name ? capitalizeLetter(evolutionChain.chain?.species?.name) : ''}</h4>
        <h4>&rarr;</h4>
        <h4>{evolutionChain.chain?.evolves_to[0]?.species?.name ? capitalizeLetter(evolutionChain.chain?.evolves_to[0].species?.name) : 'n/a'}</h4>
        <h4>&rarr;</h4>
        <h4>{evolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species?.name ? capitalizeLetter(evolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species?.name) : 'n/a'}</h4>
    </div>
  )
}
