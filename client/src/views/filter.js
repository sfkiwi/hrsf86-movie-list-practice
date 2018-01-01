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


