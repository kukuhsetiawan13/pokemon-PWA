import React from 'react'
import { capitalizeLetter } from '../utils/capitalizeLetter'
import { defineLabelBackground } from '../utils/defineBackground'

export default function Label({px, name, types}) {
  return (
    <div className={`${types ? `${defineLabelBackground(types)} opacity-75` : 'bg-yellow-500'} font-bold text-white text-sm text-center rounded-2xl break-words py-1 sm:px-1 md:px-2 px-${px}`}>{capitalizeLetter(name)}</div>
  )
}
