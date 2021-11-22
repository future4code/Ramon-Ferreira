import './App.css';
import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async ()=> {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let topRated = list.filter(i => i.slug === 'top rated')
      let randomChosen = Math.floor(Math.random() * (topRated[0].items.results.length -1))
      let chosen = topRated[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }
    loadAll()
  }, [])


  return(
    <div className='page'>
      {
        featureData && <FeaturedMovie item={featureData}/>
      }
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      
    </div>
  )
}
