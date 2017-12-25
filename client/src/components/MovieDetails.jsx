import React from 'react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    };
  }

  render() {

    return (
      <div className="movie-details-row" >
        <div className="col-md" >
          <img className="movie-thumbnail" src={this.props.details.thumbnail} />
        </div>
        <div className="col-md" >
          <div className="movie-details" >Year: <span className="movie-details bold">{this.props.details.year}</span></div>
          <div className="movie-details" >Runtime: <span className="movie-details bold">{this.props.details.runtime}</span></div>
          <div className="movie-details" >Metascore: <span className="movie-details bold">{this.props.details.metascore}</span></div>
          <div className="movie-details" ><a href={this.props.details.imdb}>imdb</a></div>
          <div className="movie-details" >Watched: <span className="movie-details bold">{
            this.state.watched ? 'Yes' : 'No'}</span></div>
        </div>        
      </div>
    );
  }
}

module.exports = MovieDetails;