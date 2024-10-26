import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpcoming from '../hooks/useUpcoming';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovie(); 
  usePopularMovie();
  useTopRatedMovie();
  useUpcoming();
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
