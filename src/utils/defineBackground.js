export const defineBackground = (arr) => {
    if(arr[0]?.type?.name === 'grass') return 'bg-green'
    else if(arr[0]?.type?.name === 'fire') return 'bg-red'
    else if(arr[0]?.type?.name === 'water') return 'bg-blue'
    else if(arr[0]?.type?.name === 'electric') return 'bg-yellow'
    else if(arr[0]?.type?.name === 'bug') return 'bg-dark-green'
    else if(arr[0]?.type?.name === 'flying') return 'bg-light-blue'
    else if(arr[0]?.type?.name === 'poison') return 'bg-purple'
    else if(arr[0]?.type?.name === 'fairy') return 'bg-pink'
    else if(arr[0]?.type?.name === 'ground') return 'bg-brown'
    else if(arr[0]?.type?.name === 'rock') return 'bg-maroon'
    else if(arr[0]?.type?.name === 'normal') return 'bg-normal'
    else if(arr[0]?.type?.name === 'psychic') return 'bg-light-pink'
    else if(arr[0]?.type?.name === 'fighting') return 'bg-orange'
    else if(arr[0]?.type?.name === 'dark') return 'bg-black'
    else if(arr[0]?.type?.name === 'ghost') return 'bg-dark-purple'
    else if(arr[0]?.type?.name === 'ice') return 'bg-cyan'
    else if(arr[0]?.type?.name === 'dragon') return 'bg-light-cyan'
    else if(arr[0]?.type?.name === 'steel') return 'bg-light-green'
    else return 'bg-slate-600'
}

export const defineLabelBackground = (arr) => {
    if(arr[0]?.type?.name === 'grass') return 'bg-green-label'
    else if(arr[0]?.type?.name === 'fire') return 'bg-red-label'
    else if(arr[0]?.type?.name === 'water') return 'bg-blue-label'
    else if(arr[0]?.type?.name === 'electric') return 'bg-yellow-label'
    else if(arr[0]?.type?.name === 'bug') return 'bg-dark-green-label'
    else if(arr[0]?.type?.name === 'flying') return 'bg-light-blue-label'
    else if(arr[0]?.type?.name === 'poison') return 'bg-purple-label'
    else if(arr[0]?.type?.name === 'fairy') return 'bg-pink-label'
    else if(arr[0]?.type?.name === 'ground') return 'bg-brown-label'
    else if(arr[0]?.type?.name === 'rock') return 'bg-maroon-label'
    else if(arr[0]?.type?.name === 'normal') return 'bg-normal-label'
    else if(arr[0]?.type?.name === 'psychic') return 'bg-light-pink-label'
    else if(arr[0]?.type?.name === 'fighting') return 'bg-orange-label'
    else if(arr[0]?.type?.name === 'dark') return 'bg-black-label'
    else if(arr[0]?.type?.name === 'ghost') return 'bg-dark-purple-label'
    else if(arr[0]?.type?.name === 'ice') return 'bg-cyan-label'
    else if(arr[0]?.type?.name === 'dragon') return 'bg-light-cyan-label'
    else if(arr[0]?.type?.name === 'steel') return 'bg-light-green-label'
    else return 'bg-slate-200'
}