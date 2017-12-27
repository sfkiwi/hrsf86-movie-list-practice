import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) => {

  return (
    <div className="row">
      <div className="col-12 mt-2">
        {props.list.length > 0 ? props.list.map((item) => (
          <Movie key={item.id} movie={item} setWatched={props.setWatched} />)) : <div>No Results to show</div>}
      </div>
    </div>
  );
}

module.exports = MoviesList;