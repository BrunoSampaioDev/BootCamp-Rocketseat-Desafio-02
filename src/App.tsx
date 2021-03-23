import { SideBar } from './components/SideBar';
import {  MoviesProvider } from './hooks/MoviesContext';
import { Content } from './components/Content';


import './styles/global.scss';
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  
  
  //const movies = useContext(MoviesContext)
  
  //console.log(movie)
  return (
    
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MoviesProvider>
        <SideBar/>
        <Content/>
      </MoviesProvider>
    </div>
    
  )
}