import { useSelector } from 'react-redux';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovie(); 
  usePopularMovie();
  useTopRatedMovie();
  useUpcoming();
  return (
    <div>
    <Header/>
    {
      showGptSearch ? <GptSearch/> : <>  <MainContainer/> <SecondaryContainer/></>
    }
    </div>
  )
}

export default Browse
