import { Component } from 'react';


import movies from '../data/movies';


export default class List extends Component {
    
    state = {

        movies: movies
    } 


    render() {

        return (
            <div>

                <h1>List of Movies</h1>

                <ul>
                    {this.state.movies.movies.map(movie => (

                        <li key={movie.title}>

                            <a href={`/movies/${movie.title}`}>

                            {movie.title}

                            </a>

                        </li>

                    ))}

                </ul>
            </div>
        )
    }

}