import React from 'react'
import Label from '../Label'

export default function Moves({moves}) {
  return (
    <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2'>
    {moves.length > 0 && moves.map(move => {
        return (
            <Label className="h-52" px={2} name={move?.move?.name}/>
        )
    })}
    </div>
  )
}
