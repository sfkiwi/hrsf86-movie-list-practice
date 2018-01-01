const template = require('../templates/movielistentrydetails.html');

var MovieListEntryDetailsView = Backbone.View.extend({

  events: {
    //'click input#watched': 'handleWatched'
  },

  handleWatched: function() {
    this.model.watched();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: _.template(template)

});

module.exports = MovieListEntryDetailsView;
