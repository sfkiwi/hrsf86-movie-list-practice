const template = require('../templates/movielistentrywatched.html');

var MovieListEntryWatchedView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: _.template(template)
})

module.exports = MovieListEntryWatchedView;