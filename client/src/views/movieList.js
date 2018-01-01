//import React from 'react';
//import Movie from './Movie.jsx';
const template = require('../templates/movielist.html');
const MovieListEntryView = require('./movieListEntry');

var MovieListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sort', this.render);
    this.listenTo(this.collection, 'clear', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    let filteredList = this.collection.filterByTitle(this.collection);
    filteredList = this.collection.filterByAttribute(filteredList);

    this.$('#movie-list').append(filteredList.map(function (movie) {
      return new MovieListEntryView({ model: movie }).render().el;
    }));

    return this;
  },

  template: _.template(template)
});


module.exports = MovieListView;
/*


var MoviesList = (props) => {

  return (

  );
}

module.exports = MoviesList;*/