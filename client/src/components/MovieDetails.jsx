import React from 'react';
import WatchedMovie from './WatchedMovie.jsx';

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
      <div className="movie-details-row" >
        <div className="col-md" >
          <img className="movie-thumbnail" src={this.props.movie.thumbnail} />
        </div>
        <div className="col-md" >
          <div className="movie-details-heading" ><div className="movie-details-text">{this.props.movie.year} | <b>{this.props.movie.rating}</b> | {this.props.movie.genre}</div></div>
          {this.props.movie.overview ? <div className="movie-details-overiew" ><div className="movie-details-text">{this.props.movie.overview}</div></div> : ''}
          <WatchedMovie watched={this.props.movie.watched} onWatched={this.setWatched} />
        </div>        
      </div>
    );
  }
}

module.exports = MovieDetails;