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