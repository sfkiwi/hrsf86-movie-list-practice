import React from 'react';
import MovieDetails from './MovieDetails.jsx';
//import ErrorBoundary from './ErrorBoundary.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-row">
        <div className="movie-title"><h2>{this.props.movie.title}</h2></div>
        <MovieDetails details={this.props.movie.details} />
      </div>
    );
  }
}

module.exports = Movie;