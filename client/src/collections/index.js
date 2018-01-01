const Movie = require('../models');

var Movies = Backbone.Collection.extend({

  url: '/movies',

  model: Movie,

  initialize: function() {
    this.attributes = false;
    this.titleFilter = false;
  },

  modelId: function(attrs) {
    return attrs.id;
  },

  getMovies: function() {
    this.fetch();
  },

  setTitleFilter: function(title) {
    this.titleFilter = title.toLowerCase();
    this.trigger('sort');
  },

  setAttributeFilter: function(attribute, value) {
    this.attributes = {};
    this.attributes[attribute] = value;
    console.log(this.attributes);
    this.trigger('sort');
  },

  clearFilters: function() {
    this.titleFilter = false;
    this.attributes = false; 
    this.trigger('clear');
  },

  filterByAttribute: function(collection) {

    let filteredList = collection.models;
    console.log('this.attributes: ', this.attributes);
    if (this.attributes) {
      console.log('filtering watched');
      filteredList = filteredList.filter((movie) => {
        console.log(movie.get('watched'));
        return movie.get('watched') == this.attributes.watched;
      });
    
    }
    
    return new Movies(filteredList);
  },

  filterByTitle: function(collection) {

    let filteredList = collection.models;
    
    if (this.titleFilter) {
      filteredList = filteredList.filter((movie) => {
        return movie.get('title').toLowerCase().includes(this.titleFilter);
      });
    }
    return new Movies(filteredList);
  },

  parse: function(response) {
    return response;
  }
});

module.exports = Movies;