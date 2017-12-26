import React from 'react';
import MovieDetails from './MovieDetails.jsx';
import WatchedMovie from './WatchedMovie.jsx';
//import ErrorBoundary from './ErrorBoundary.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDetails: true
    }

    this.hideDetails = this.hideDetails.bind(this);
    this.onWatched = this.onWatched.bind(this);
  }

  hideDetails() {
    this.setState({hideDetails: !this.state.hideDetails});
  }

  onWatched(watched) {
    this.props.onWatched(this.props.movie.id, this.props.movie, watched);
  }

  render() {

    let details = '';

    if(this.state.hideDetails) {
      details = <MovieDetails details={this.props.movie.details} />
    }

    return (
      <div className="movie-row">
        <div onClick={this.hideDetails} className="movie-title"><h2>{this.props.movie.title}</h2></div>
        {details}
        <WatchedMovie watched={this.props.movie.watched} onWatched={this.onWatched} />
      </div>
    );
  }
}

module.exports = Movie;