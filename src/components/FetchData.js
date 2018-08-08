import React, { Component } from 'react';

class FetchData extends Component {
  state = {
    trendingMovies: []
  }


  //Life cycle method
  componentDidMount() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = () => {
    fetch('https://javascriptst18.herokuapp.com/trending?_limit=10')
      .then(response => response.json())
      .then((trendingMovies) => {
        this.setState({ trendingMovies: trendingMovies });
      });
  }

  //render MÅSTE finnas
  render() {
    const movies = this.state.trendingMovies.map((movie) => {
      return (
        <div className="Card">
          <p> {movie.title} </p>
          <em> {movie.rating} </em>
        </div>
      );
    });

    if (this.state.trendingMovies.length) {
      return (
        <div>
          {movies}
        </div >
      );
    } else {
      return (
        <p> LOADING! </p>
      );
    }

  }
}

export default FetchData;
