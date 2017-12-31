import React from 'react';
import ReactDOM  from 'react-dom';
import MoviesList from './components/MoviesList.jsx';
import AddMovie from './components/AddMovie.jsx';
import Filter from './components/Filter.jsx';
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
    this.setFilter = this.setFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.setWatched = this.setWatched.bind(this);
  }

  loadMovies() {
    return http.get('/load')

      .then((response) => {
        if (response.status === 301) {
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
          //this.applySearch(this.list);
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
    console.log('Search Query ', title);
    this.searchQuery = title
    this.applySearch(this.list);
  }

  applySearch(list) {
    if (this.searchQuery) {

      list = list.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      console.log('Search List ', list);
    }

    this.applyFilters(list);
  }

  setFilter(filter) {
    this.filter = filter;
    this.applySearch(this.list);
  }

  applyFilters(list) {

    if (this.filter) {

      console.log('Filters ', this.filter);
      list = list.filter(movie => movie.watched == this.filter.watched);

      console.log('Filtered List ', list);
    }
    this.updateView(list);
  }

  clearFilters() {
    this.searchQuery = false;
    this.filter = false;
    this.applySearch(this.list);
  }

  updateView(list) {
    this.setState({
      filteredList: list
    })

    //console.log('Rendered View', list)
  }

  render() {
    if (this.state.filteredList) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 bg-primary text-white mb-2">
              <p className="display-4">MovieList</p>
            </div>
          </div>
          <AddMovie addMovie={this.addMovie} />
          <Filter search={this.setSearchQuery} watched={this.setFilter} clearFilters={this.clearFilters} />
          <MoviesList className="movies-list" list={this.state.filteredList} setWatched={this.setWatched} />
        </div>
      );
    }
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
