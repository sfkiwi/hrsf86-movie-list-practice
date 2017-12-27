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
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <p className="h6">{this.props.movie.year} | <b>{this.props.movie.rating}</b> | {this.props.movie.genre}</p> 
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {this.props.movie.overview ? <p className="lead mb-0">{this.props.movie.overview}</p> : ''}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <WatchedMovie watched={this.props.movie.watched} onWatched={this.setWatched} />
            </div>
          </div>
        </div>
        <div className="col-3">
          <img className="img-fluid img-thumbnail rounded float-left mb-4 align-middle" src={this.props.movie.thumbnail} />
        </div>
      </div>
    );
  }
}

module.exports = MovieDetails;





  

  
7

