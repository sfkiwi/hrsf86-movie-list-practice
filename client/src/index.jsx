import React from 'react';
import ReactDOM  from 'react-dom';
import MoviesList from './components/MoviesList.jsx';
import AddMovie from './components/AddMovie.jsx';
import SearchMovie from './components/Search.jsx';
import http from 'axios';

http.defaults.baseURL = 'http://localhost:3000';
http.defaults.headers.post['Content-Type'] = 'application/json';



class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      filteredList: []
    }

    this.getMovies() 

      .then((movies) => {
        console.log(movies);
        this.setState({
          list: movies,
          filteredList: movies
        })
      })

      .catch((err) => {
        console.error(err.message);
      })

    this.addMovie = this.addMovie.bind(this);
    this.search = this.search.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.watchedMovie = this.watchedMovie.bind(this);

  }

  getMovies() {

    return new Promise((resolve, reject) => {
      return http.get('/movies')
      
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(new Error('Server responsed with an Erro'));
          }
        })

        .catch(console.error.bind(console));
    });
  }

  addMovie(title) {

    let list = this.state.list;

    return http.post('/movies', {
      title: title
    })

      .then((response) => {
        list.push(response.data);

        this.setState({
          list: list
        });
      })

      .catch(console.error.bind(console));;
  }

  searchResults(results) {
    this.setState({ filteredList: results });      
  }

  clearSearchResults() {
    this.setState({filteredList: this.state.list});
  }

  search(title) {
    return new Promise((resolve, reject) => {
      let filteredList = this.state.list.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );

      resolve(filteredList);
    })
  }

  watchedMovie(id, movie, watched) {

    let filteredList = this.state.list.filter(movie => 
      movie.title === movie.title);

    filteredList[0].watched = watched;
  }

  render() {
    return (
      <div className="container" >
        <div id="header" className="row">
          <h2>MovieList</h2>
        </div>
        <div id="control" className="row">
          <AddMovie addMovie={this.addMovie} />
          <SearchMovie search={this.search} searchResults={this.searchResults} clearSearch={this.clearSearchResults} />
        </div>
        <div id="list" className="row">
          <div className="col-md">
            <MoviesList className="movies-list" list={this.state.filteredList} onWatched={this.watchedMovie} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
