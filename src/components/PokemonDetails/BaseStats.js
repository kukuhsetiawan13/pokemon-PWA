import React from 'react'
import { capitalizeLetter } from '../../utils/capitalizeLetter'

export default function BaseStats({stats}) {
  return (
    <div className='flex flex-col gap-3'>
        {stats.length > 0 && stats.map(stat => {
            return (
                <div key={stat.stat?.name} className='flex items-center'>
                    <h3 className='text-slate-500 w-28'>{capitalizeLetter(stat.stat?.name)}</h3>
                    <h3>{stat.base_stat ? stat.base_stat : ''}</h3>
                    <div className="ml-5 w-7/12 bg-gray-200 h-1">
                        <div className={`bg-blue-600 h-1`} style={{ width: `${stat.base_stat}%`}}></div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
