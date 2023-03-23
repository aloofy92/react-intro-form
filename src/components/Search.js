import React, { Component } from 'react';


class Search extends Component {

    constructor(props) {

        super(props);

        this.state = {

            searchFor: '',

            searchType: ''
        }
    }

    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({

            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
      
        this.props.searchMovie(this.state.searchFor, this.state.searchType);

        this.setState({

            searchFor: '',

            searchType: ''
        });
    }


    render() {

        return (

            <form onSubmit={this.handleSubmit}>

                <h2>Search for Movies</h2>

                <label>
                    Search by:

                    <select name="searchType" value={this.state.searchType} onChange={this.handleChange}>

                        <option value="title">Title</option>

                        <option value="director">Director</option>

                        <option value="year">Year</option>

                        <option value="genre">Genre</option>

                        <option value="plot">Plot</option>
                        
                    </select>

                </label>

                <label>

                    Search For:
                    
                    <input type="text" name="search" value={this.state.searchFor} onChange={this.handleChange} />

                </label>

                <input type="submit" value="Search" />

            </form>
        )
    }
}

export default Search;