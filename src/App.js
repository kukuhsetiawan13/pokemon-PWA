import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import ReactPaginate from 'react-paginate';
import { FETCH_ALL_POKEMONS_URL } from './store/url';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import pokemonBall from './data/pokemon-ball.json'

function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  const [pokemons, setPokemons] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const fetchPokemon = async (page) => {
    try {
      let offset = (page - 1) * 20
      if(offset < 0) offset = 0
      
      let limit = 20

      const { data } = await axios({
        method: 'GET',
        url: `${FETCH_ALL_POKEMONS_URL}/?limit=${limit}&offset=${offset}`
      })
      setPokemons(data.results)
      setTotalPages(Math.ceil(data.count / limit))
      fetchPokemonDetails(data.results)
    } catch(err) {
      console.log(err, "<<ERR AXIOS")
    }
  }

  const fetchPokemonDetails = async (arr) => {
    let check = pokemons.find(({name}) => name === arr[0].name)
    if(check) return
    setPokemons([])
    
    arr.forEach(async (pokemon) => {
      try {
        const { data } = await axios ({
          method: 'GET',
          url: pokemon.url
        })
        setPokemons((prevState) => [...prevState, data])
      } catch(err) {
        console.log(err)
      }
    })
    
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    setLoading(true)
    fetchPokemon(location.search.substring(6))
    if(pokemons.length > 0) fetchPokemonDetails(pokemons)
  }, [location])

  const handlePageClick = (event) => {
    navigate(`/?page=${event.selected + 1}`)
  };



  return (
    <>
    {loading &&
      <div className='absolute flex w-full h-full justify-center items-center'>
        <Lottie className='z-20 w-48 h-48 md:w-96 md:h-96' animationData={pokemonBall} loop={true} />
      </div> 
    }
    <div className='mt-10 p-2'>
      <h1 className="text-3xl font-bold text-sky-900">
      Pokedex
      </h1>
      <div className='mt-10 grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3'>
        <PokemonCard pokemons={pokemons}/>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
        initialPage={location?.search ? location.search.substring(6) - 1 : 0}
      />
    </div>
    </>
  );
}

export default App;
