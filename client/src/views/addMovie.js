//import React from 'react';

const template = require('../templates/addmovie.html');

var AddMovieView = Backbone.View.extend({

  events: {
    'click input#addmoviebutton': 'addMovie'
  },

  addMovie: function () {
    var title = this.$('#addmovietext').val().trim();
    this.$('#addmovietext').val('');
   
    if (title) {
      this.collection.create({
        title: title
      });
    }
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: _.template(template)

});

module.exports = AddMovieView;


/*
class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value.length) {
      this.props.addMovie(this.state.value);
    }
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      
    );
  }
}

module.exports = AddMovie;*/