import React, { Component } from "react"
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'


class Main extends Component {
    token = process.env.REACT_APP_OMDB_TOKEN

    state = {
        movies: []
    }

    fn_search_movies = (value, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=${this.token}&s=${value}${type === 'all' ? '' : `&type=${type}`}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    // componentDidMount() {
    //     const token = process.env.REACT_APP_OMDB_TOKEN

    //     fetch(`http://www.omdbapi.com/?apikey=${token}&s=harry`)
    //         .then(response => response.json())
    //         .then(data => this.setState({movies: data.Search}))
        
    // }
    
    render() {
        const { movies } = this.state;
        return (
            <main className="container content" >
                <Search fn_search={ this.fn_search_movies } />
                {/* Добавили preloader если список фильмов не прогрузился */}
                {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />} 

            </main>
        )
    }
}

export { Main }