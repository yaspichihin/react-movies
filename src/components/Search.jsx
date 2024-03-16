import React, { useState } from "react"


export function Search(props) {
    // Если ничего не передано, то по умолчанию
    // передаем прототип функции.
    const { fn_search: fnSearch = Function.prototype} = props;

    const [search, setSearch] = useState('');
    const [type_content, setTypeContent] = useState('all');

    const updateSearch = (event) => setSearch(event.target.value);
    const updateTypeContent = (event) => setTypeContent(event.target.value);
    const sendSearch = (event) => { if (event.key === 'Enter') fnSearch(search, type_content) };


    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validte"
                    placeholder="search"
                    type="search"
                    name="search"
                    value={search}
                    onChange={updateSearch}
                    onKeyDown={sendSearch}
                />
                <button
                    className="btn search-btn"
                    onClick={() => fnSearch(search, type_content)}
                >
                Search
                </button>
            </div>
            <div>
                <label>
                    <input 
                        className="with-gap"
                        name="type_content"
                        type="radio"
                        value="all"
                        onChange={updateTypeContent}
                        checked={type_content === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input 
                        className="with-gap"
                        name="type_content"
                        type="radio"
                        value="movie"
                        onChange={updateTypeContent}
                        checked={type_content === 'movie'}
                    />
                    <span>Movie</span>
                </label>
                <label>
                    <input 
                        className="with-gap"
                        name="type_content"
                        type="radio"
                        value="series"
                        onChange={updateTypeContent}
                        checked={type_content === 'series'}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    )
}
