import React, { Component } from "react";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      MovieData: []
    };
  }

  Api_MovieList = "https://facebook.github.io/react-native/movies.json";

  // fetch use promise
  getMovieData1() {
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          MovieData: responseJson.movies
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  // // fetch use async await
  // async getMovieData2() {
  //   try {
  //     let response = await fetch("https://facebook.github.io/react-native/movies.json");
  //     let responseJson = await response.json();
  //     console.log(responseJson)
  //     this.setState({
  //       movieData: responseJson.movies
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  componentDidMount() {
    this.getMovieData1();
  }

  render() {
    return (
      <ul>
        {this.state.MovieData.map(data => (
          <li>
            <h3>{data.title}</h3>
            <p>{data.releaseYear}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default MovieList;
