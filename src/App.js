import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import ReactPaginate from 'react-paginate';
import { FETCH_ALL_POKEMONS_URL } from './store/url';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()
  const location = useLocation()

  const [pokemons, setPokemons] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const fetchPokemon = async (page) => {
    try {
      let offset = (page - 1) * 20
      if(offset < 0) offset = 0 

      const { data } = await axios({
        method: 'GET',
        url: `${FETCH_ALL_POKEMONS_URL}/?limit=20&offset=${offset}`
      })
      setTotalPages(Math.ceil(data.count / 20))
      fetchPokemonDetails(data.results)
    } catch(err) {
      console.log(err, "<<ERR AXIOS")
    }
  }

  const fetchPokemonDetails = (arr) => {
    let check = pokemons.find(({name}) => name === arr[0].name)
    if(check) return
    setPokemons([])
    arr.map(async (pokemon) => {
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
  }

  useEffect(() => {
    fetchPokemon(location.search.substring(6))
  }, [location])

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons]) // remove later

  const handlePageClick = (event) => {
    navigate(`/?page=${event.selected + 1}`)
  };

  return (
    <div className='mt-10 p-2'>
      <h1 className="text-3xl font-bold text-sky-900">
      Pokedex
      </h1>
      {/* <div className='flex justify-center flex-wrap gap-3 mt-10'> */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3'>
        <PokemonCard pokemons={pokemons}/>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
        initialPage={location?.search ? location.search.substring(6) - 1 : 0}
      />
    </div>
  );
}

export default App;
