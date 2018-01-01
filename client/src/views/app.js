const template = require('../templates/app.html');

const Movies = require('../collections/index.js');

const AddMovieView = require('./addMovie');
const FilterView = require('./filter');
const MovieListView = require('./movieList');

var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.movies = new Movies();
    this.movies.getMovies();
    this.render(this.template);
  },

  render: function() {
    this.$el.html(this.template());

    new AddMovieView({
      collection: this.movies,
      el: this.$('#addmovie')
    }).render();
    
    new FilterView({
      collection: this.movies,
      el: this.$('#filter')
    }).render();

    new MovieListView({
      collection: this.movies,
      el: this.$('#movielist')
    }).render();

    return this;
  },

  template: _.template(template)
})

module.exports = AppView;
/*
MovieList extends React.Component {
  constructor() {
    super();

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
    return http.patch('/watched', { id: movieId, watched: watched })

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
    
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));
*/