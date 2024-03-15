import React, { Component } from "react"

class Search extends Component {
    state = {
        search: '',
        type_content: 'all'

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.fn_search(this.state.search, this.state.type_content)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validte"
                        placeholder="search"
                        type="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.fn_search(this.state.search, this.state.type_content)}
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
                            onChange={this.handleChange}
                            checked={this.state.type_content === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            className="with-gap"
                            name="type_content"
                            type="radio"
                            value="movie"
                            onChange={this.handleChange}
                            checked={this.state.type_content === 'movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input 
                            className="with-gap"
                            name="type_content"
                            type="radio"
                            value="series"
                            onChange={this.handleChange}
                            checked={this.state.type_content === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export { Search }