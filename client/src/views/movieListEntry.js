const template = require('../templates/movielistentry.html');
const MovieListEntryDetailsView = require('./movieListEntryDetails');
const MovieListEntryWatchedView = require('./movieListEntryWatched');

var MovieListEntryView = Backbone.View.extend({

  initialize: function() {
    this.showDetails = false;
  },

  events: {
    'click .movie-title': 'handleClick'
  },

  handleClick: function() {
    this.showDetails = !this.showDetails;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));

    '<span class="badge badge-secondary align-middle ml-3">watched</span>'

    if (this.showDetails) {
      this.$('#movie-details').append(
        new MovieListEntryDetailsView({ model: this.model }).render().el
      );
    }

    if (this.model.get('watched')) {
      this.$('.movie-title').append(
        new MovieListEntryWatchedView().render().el
      );
    }

    return this;
  },

  template: _.template(template)
});

module.exports = MovieListEntryView;