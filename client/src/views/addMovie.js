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