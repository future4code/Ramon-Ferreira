import React from "react";
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


export default ({title, items}) => {
    return(
        <div className='movies'>
            <h2>{title}</h2>

        <div className='left'>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
        </div>

        <div className='right'>
        <NavigateNextIcon style={{fontSize: 50}}/>
        </div>

            <div className='movieListArea'>
                <div className='movieList'>
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div className='movieItem'>
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}