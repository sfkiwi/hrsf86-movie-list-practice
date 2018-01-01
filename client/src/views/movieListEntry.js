//import React from 'react';
//import MovieDetails from './MovieDetails.jsx';

const template = require('../templates/movielistentry.html');
const MovieListEntryDetailsView = require('./movieListEntryDetails');
const MovieListEntryWatchedView = require('./movieListEntryWatched');

var MovieListEntryView = Backbone.View.extend({

  initialize: function() {
    this.showDetails = false;
  },

  events: {
    'click .movie-title': 'handleClick'
  },

  handleClick: function() {
    this.showDetails = !this.showDetails;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));

    '<span class="badge badge-secondary align-middle ml-3">watched</span>'

    if (this.showDetails) {
      this.$('#movie-details').append(
        new MovieListEntryDetailsView({ model: this.model }).render().el
      );
    }

    if (this.model.get('watched')) {
      this.$('.movie-title').append(
        new MovieListEntryWatchedView().render().el
      );
    }

    return this;
  },

  template: _.template(template)
});

module.exports = MovieListEntryView;




/*
class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDetails: false
    }

    this.hideDetails = this.hideDetails.bind(this);
  }

  hideDetails() {
    this.setState({hideDetails: !this.state.hideDetails});
  }

  

  render() {

    let details = '';
    let watched = '';

    if(this.state.hideDetails) {
      details = <MovieDetails movie={this.props.movie} setWatched={this.props.setWatched} />
    }

    if(this.props.movie.watched) {
      watched = <span className="badge badge-secondary align-middle ml-3">watched</span>
    }

    return (

    );
  }
}

module.exports = Movie;*/

