import React from 'react';
import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDetails: true
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
      watched = <div className='movied-watched'>watched</div>
    }

    return (
      <div className="movie-row">
        <div onClick={this.hideDetails} className="movie-title"><h2>{this.props.movie.title}</h2></div>
        {watched}
        {details}
      </div>
    );
  }
}

module.exports = Movie;