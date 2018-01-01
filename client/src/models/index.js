var Movie = Backbone.Model.extend({

  initialize: function(movie) {
  },

  select: function() {
    this.trigger('select', this);
  }

});

module.exports = Movie;