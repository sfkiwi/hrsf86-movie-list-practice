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
          {this.props.details.year ? <div className="movie-details-bold" >Year: <span className="movie-details">{this.props.details.year}</span></div> : ''}
          {this.props.details.runtime ? <div className="movie-details-bold" >Runtime: <span className="movie-details">{this.props.details.runtime}</span></div> : ''}
          {this.props.details.metascore ? <div className="movie-details-bold" >Metascore: <span className="movie-details">{this.props.details.metascore}</span></div> : ''}
          {this.props.details.imdb ? <div className="movie-details-bold" ><a href={this.props.details.imdb}>imdb</a></div> : ''}
          {this.props.details.description ? <div className="movie-details-bold" >Description: <span className="movie-details">{this.props.details.description}</span></div> : ''}
        </div>        
      </div>
    );
  }
}

module.exports = MovieDetails;