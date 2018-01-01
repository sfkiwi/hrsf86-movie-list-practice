//import React from 'react';
const template = require('../templates/filter.html');


var FilterView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'clear', this.clearSearchField);
  },

  events: {
    'click input.filter-watched': 'handleWatched',
    'click input.filter-towatch': 'handleToWatch',
    'click input.filter-clear': 'handleClear',
    'keyup input.filter-title': 'handleKeyUp'
  },

  handleKeyUp: function() {
    var query = this.$('.filter-title').val();

    if (query) {
      this.collection.setTitleFilter(query);
    }
  },

  clearSearchField: function() {
    this.$('.filter-title').val('');
  },

  handleWatched: function () {
    console.log('watched');
    this.collection.setAttributeFilter('watched', true);
  },
  
  handleToWatch: function () {
    this.collection.setAttributeFilter('watched', false);
  },

  handleClear: function () {
    this.collection.clearFilters();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: _.template(template)

})

module.exports = FilterView;


/*
class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      watched: false,
      toWatch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    console.log('Changed');
    
    this.setState({ value: event.target.value });
    this.props.search(event.target.value);
  }

  handleWatched(event) {
    console.log('Watched');
    
    this.setState({ 
      watched: true,
      toWatch: false
    });

    this.props.watched({
      watched: true,
      toWatch: false,
    });
  }

  handleToWatch(event) {
    console.log('ToWatch');
    this.setState({ 
      toWatch: true,
      watched: false 
    });

    this.props.watched({
      watched: false,
      toWatch: true,
    });
  }

  handleClear(event) {
    this.setState({
      toWatch: false,
      watched: false,
      value: ''
    });
    this.props.clearFilters()
  }

  render() {
    return (
     
    );
  }
}

module.exports = Filter;*/