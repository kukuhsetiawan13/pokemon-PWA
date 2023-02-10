import React from 'react'
import { capitalizeLetter } from '../../utils/capitalizeLetter'
import { getStringFromAbilitiesArray } from '../../utils/formatAbilities'
import { getCmFromDm, getFeetInchFromDm } from '../../utils/formatHeight'
import { getKgFromHectograms, getLbsFromHectograms } from '../../utils/formatWeight'

export default function About({pokemon}) {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex'>
            <h3 className='text-slate-500 w-28'>Species</h3>
            <h3 className='text-black-500'>{pokemon.species?.name ? capitalizeLetter(pokemon.species?.name) : ''}</h3>
        </div>
        <div className='flex'>
            <h3 className='text-slate-500 w-28'>Height</h3>
            <h3 className='text-black-500'>{pokemon.height ? `${getFeetInchFromDm(pokemon.height)} (${getCmFromDm(pokemon.height)} cm)` : ''}</h3>
        </div>
        <div className='flex'>
            <h3 className='text-slate-500 w-28'>Weight</h3>
            <h3 className='text-black-500'>{pokemon.weight ? `${getLbsFromHectograms(pokemon.weight).toFixed(2)} lbs (${getKgFromHectograms(pokemon.weight)} kg)` : ''}</h3>
        </div>
        <div className='flex'>
            <h3 className='text-slate-500 w-28'>Abilities</h3>
            <h3 className='text-black-500'>{pokemon.abilities?.length > 0 ? getStringFromAbilitiesArray(pokemon.abilities) : ''}</h3>
        </div>
    </div>
  )
}
