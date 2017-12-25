import React from 'react';
import FormSubmit from './FormSubmit.jsx';

var AddMovie = (props) => (
  <FormSubmit handleSubmit={props.addMovie} action={'add'} placeholder={'Enter movie title to add'} />
);

module.exports = AddMovie;