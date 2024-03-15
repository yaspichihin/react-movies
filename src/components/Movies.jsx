import { Movie } from './Movie'

export function Movies(props) {
    const { movies } = props;
    console.log(movies)
    return (
        <div className="movies">
            {movies.length ?
                // Передаем все данные через спред оператор
                movies.map(movie => (<Movie key={movie.imdbID} {...movie} />)) :
                <h4>Nothing found</h4>
            }
        </div>
    )
}