import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    movies.NowPlayingMovie &&  <div className='bg-black'>
    <div className='-mt-60 relative z-20'>
    <MovieList title={"Now Playing"} movies={movies.NowPlayingMovie}/>
    <MovieList title={"Trending"} movies={movies.NowPlayingMovie}/>
    <MovieList title={"Popular"} movies={movies.NowPopularMovie}/>
    <MovieList title={"Top Rated Movie"} movies={movies.NowTopRatedMovie}/>
    <MovieList title={"Upcoming Movie"} movies={movies.NowUpcomingMovie}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
