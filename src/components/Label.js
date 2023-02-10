import React from 'react'
import { capitalizeLetter } from '../utils/capitalizeLetter'

export default function Label({px, name}) {
  return (
    <div className={`bg-yellow-600 text-white text-sm text-center rounded-2xl break-words py-1 px-${px}`}>{capitalizeLetter(name)}</div>
  )
}
