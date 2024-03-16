import React, { useState } from "react"
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const token = process.env.REACT_APP_OMDB_TOKEN
    
export function Main() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fn_search_movies = (value, type = 'all') => {
        setIsLoading(true);
        fetch(
            `https://www.omdbapi.com/` +
            `?apikey=${token}&` +
            `s=${value}` +
            `${type === 'all' ? '' : `&type=${type}`}`
        )
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search || []);
                setIsLoading(false);
                }
            )
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            })
    }

    return (
        <main className="container content" >
            <Search fn_search={ fn_search_movies } />
            {/* Добавили preloader если список фильмов не прогрузился */}
            { isLoading === false ? <Movies movies={movies} /> : <Preloader />} 

        </main>
    )
}
