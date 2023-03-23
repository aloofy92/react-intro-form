import React, { Component } from 'react';

import './App.css';

import MovieForm from './components/MovieForm';

import Table from './components/Table';

import movies from './data/movies';

import Search from './components/Search';


class App extends Component {

  state = movies;


  searchMovie = (searchTerm) => {

    const movies = [...this.state.movies];
  
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toUpperCase()));

    this.setState({ movies: filteredMovies });
  }

 
  addMovie = (movie) => {

    const movies = [...this.state.movies, movie];

    this.setState({ movies });
  }

  
  deleteMovie = (index) => {

    const movies = [...this.state.movies];

    movies.splice(index, 1);

    this.setState({ movies });
  }

  

  render() {
    return (

      <div className="App">

        <h1>Movie DB For Movie Lovers</h1>

        <Search searchMovie={this.searchMovie} />

        <Table movieData={this.state.movies} deleteMovie={this.deleteMovie} />

        <MovieForm addMovie={this.addMovie} />

      </div>
    )
  }
}


export default App;