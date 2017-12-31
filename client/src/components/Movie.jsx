import React from 'react';
import MovieDetails from './MovieDetails.jsx';

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
      <div className="row">
        <div className="col-12 border bg-white mb-2">
          <div className="row">
            <div className="col-12 py-3" onClick={this.hideDetails}>
              <span className="h3 align-middle" >{this.props.movie.title}</span>{watched}
            </div>
          </div>
            {details}
        </div>
      </div>
    );
  }
}

module.exports = Movie;