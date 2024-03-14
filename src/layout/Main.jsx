import React, { Component } from "react"
import { Movies } from '../components/Movies'


class Main extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const token = process.env.REACT_APP_OMDB_TOKEN

        fetch(`http://www.omdbapi.com/?apikey=${token}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
        
    }
    
    render() {
        const { movies } = this.state;
        return (
            <main className="container content" >
                {movies.length ? <Movies movies={this.state.movies} /> : <h3>loading...</h3>} 

            </main>
        )
    }
}

export { Main }