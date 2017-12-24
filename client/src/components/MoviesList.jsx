import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = function(props) {

  let list = props.list.map((item) => (
    <Movie key={item.id} movie={item} />));

  console.log(list);

  return (
    <div className="row movie-list">
      {list}
    </div>
  );
};

module.exports = MoviesList;