import { Movie } from './Movie'

export function Movies(props) {
    const { movies } = props;
    return (
        <div className="movies">{movies.map(movie => (
            // Передаем все данные через спред оператор
            <Movie key={movie.imdbID} {...movie} />
        ))}</div>
    )
}