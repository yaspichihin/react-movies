import React, { Component } from "react"
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'


class Main extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const token = process.env.REACT_APP_OMDB_TOKEN

        fetch(`http://www.omdbapi.com/?apikey=${token}&s=harry`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
        
    }
    
    render() {
        const { movies } = this.state;
        return (
            <main className="container content" >
                {/* Добавили preloader если список фильмов не прогрузился */}
                {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />} 

            </main>
        )
    }
}

export { Main }