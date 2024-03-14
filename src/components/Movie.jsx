export function Movie(props) {
    // Получим данные из уровня выше и переминуем их
    const {
        Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;
    return (
        <div id={id} className="movie card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    // Обработку карточек фильмов без постера
                    alt={title}
                    src={ !poster || poster === 'N/A' ? `https://placehold.co/300x450?text=${title}&font=roboto` : poster}

                />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>type: {type} <span className="right">year: {year}</span></p>
            </div>
        </div>
    )
}