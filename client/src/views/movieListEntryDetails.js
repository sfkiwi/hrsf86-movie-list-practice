//import React from 'react';
//import WatchedMovie from './WatchedMovie.jsx';

const template = require('../templates/movielistentrydetails.html');

var MovieListEntryDetailsView = Backbone.View.extend({

  events: {
    //'click input#watched': 'handleWatched'
  },

  handleWatched: function() {
    this.model.watched();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: _.template(template)

});

module.exports = MovieListEntryDetailsView;

/*
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    };

    this.setWatched = this.setWatched.bind(this);
  }

  setWatched(watched) {
    this.props.setWatched(this.props.movie.id, watched);
  }

  render() {

    return (
v
    );
  }
}

module.exports = MovieDetails;





  

  
7

*/