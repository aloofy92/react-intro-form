import movies from '../data/movies';

import { Link, useParams } from 'react-router-dom';



export default function MoviePage() {

    const { movieTitle } = useParams();

    const movie = movies.movies.find((movie) => movie.title === movieTitle);

    return (

        <div>

            <h1>{movie.title}</h1>

            <p> Genre: {movie.genre}</p>

            <p> Year Released:{movie.year}</p>

            <p> Director: {movie.director}</p>

            <p> Plot: {movie.plot}</p>

            <p> Actors: {movie.actors}</p>

            <p> IMDB rating: {movie.imdbRating}</p>


            <Link to="/movies">Watch a Movie!</Link>

        </div>
    );

}