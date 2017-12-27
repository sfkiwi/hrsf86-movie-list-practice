import React from 'react';
import ReactDOM  from 'react-dom';
import MoviesList from './components/MoviesList.jsx';
import AddMovie from './components/AddMovie.jsx';
import SearchMovie from './components/Search.jsx';
import http from 'axios';

http.defaults.baseURL = 'http://localhost:3000';
http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';



class MovieList extends React.Component {
  constructor() {
    super();

    this.list = [];
    this.searchQuery = false;
    this.filter = false;

    this.state = {
      filteredList: []
    }

    //this.loadMovies();
    this.getMovies();

    this.addMovie = this.addMovie.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.clearSearchQuery = this.clearSearchQuery.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.setWatched = this.setWatched.bind(this);
  }

  loadMovies() {
    return http.get('/load')

      .then((response) => {
        if (response.status === 200) {
          this.getMovies();
        } else {
          throw 'Server responded with an Error'
        }
      })

      .catch(console.error.bind(console));
  }

  getMovies() {

    return http.get('/movies')

      //refresh list
      .then((response) => {
        if (response.status === 200) {
          this.list = response.data;
          this.applySearch(this.list);
        } else {
          throw 'Server responded with an Error';
        }
      })

      .catch(console.error.bind(console));
  }

  addMovie(title) {

    return http.post('/movies', { title: title })

      .then((response) => {
        if (response.status === 201) {
          this.getMovies();
        }
      })

      .catch(console.error.bind(console));
  }

  setWatched(movieId, watched) {
    return http.patch('/watched', {id: movieId, watched: watched})

      .then((response) => {
        if (response.status === 200) {
          this.getMovies();
        }
      })

  }

  setSearchQuery(title) {
      this.searchQuery = title
      this.applySearch(this.list);
  }

  clearSearchQuery() {
    this.searchQuery = false;
    this.applySearch(this.list);
  }

  applySearch(list) {
    if (this.searchQuery) {

      list = list.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.applyFilters(list);
  }

  setFilter(filter) {
    this.filter = filter;
    this.applyFilters(list);
  }

  clearFilter() {
    this.filter = false;
    this.applyFilters(list)
  }

  applyFilters(list) {

    if (this.filter) {
      list = list.filter(movie =>
        movie[this.filters.filter] === this.filters.value);
    }
    this.updateView(list);
  }

  updateView(list) {
    this.setState({
      filteredList: list
    })
  }

  render() {
    if (this.state.filteredList) {
      return (
        <div className="container" >
          <div id="header" className="row">
            <h2>MovieList</h2>
          </div>
          <div id="control" className="row">
            <AddMovie addMovie={this.addMovie} />
            <SearchMovie search={this.setSearchQuery} clearSearch={this.clearSearchQuery} />
          </div>
          <div id="list" className="row">
            <div className="col-md">
              <MoviesList className="movies-list" list={this.state.filteredList} setWatched={this.setWatched} />
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
