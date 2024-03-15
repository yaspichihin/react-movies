import React, { Component } from "react"
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'


class Main extends Component {
    token = process.env.REACT_APP_OMDB_TOKEN

    state = {
        movies: [],
        isLoading: false
    }

    fn_search_movies = (value, type = 'all') => {
        this.setState({isLoading: true})
        fetch(`https://www.omdbapi.com/?apikey=${this.token}&s=${value}${type === 'all' ? '' : `&type=${type}`}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search || [], isLoading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({isLoading: false})
            })
    }

    render() {
        const { movies, isLoading } = this.state;
        return (
            <main className="container content" >
                <Search fn_search={ this.fn_search_movies } />
                {/* Добавили preloader если список фильмов не прогрузился */}
                { isLoading === false ? <Movies movies={movies} /> : <Preloader />} 

            </main>
        )
    }
}

export { Main }