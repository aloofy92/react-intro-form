import React, { Component } from 'react'

const TableHead = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>

          <th>Year</th>

          <th>Director</th>

          <th>Plot</th>

            <th>Actors</th>

            <th>imdbRating</th>

            <th>DateAdded</th>

            <th> Delete </th>
        </tr>
      </thead>
    );
  }



const TableBody = (props) => {

    const rows = props.data.map((row, index) => {

    return (      
      
    <tr key ={index}>

    <td>{row.title}</td>

    <td>{row.year}</td>

    <td>{row.director}</td>

    <td>{row.plot}</td>

    <td>{row.actors}</td>

    <td>{row.imdbrating}</td>

    <td>{row.dateAdded}</td>

    <td><button onClick={() => props.removeMovie(index)}>Delete</button></td>
    </tr>
            )      
    })
    
    return <tbody>
      {rows}
    </tbody>

}

class Table extends Component {
    render() {
  
  const {movieData, removeableMovie, addMovie } = this.props;
  
      return (

        <table>

     <TableHead/>

     <TableBody data = {movieData}  removeableMovie = {removeableMovie} addMovie = {addMovie}
     />
    
        </table>
      )
    }
  }

export default Table
