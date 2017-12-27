import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterToWatch: false,
      filterWatched: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmitToWatch(event) {
      this.setState({ 
        filterToWatch: !this.state.filterToWatch
      });

      this.props.filter('towatch', eventhis.state.filterToWatch)
        .then((results) => {
          this.props.searchResults(results)
          this.setState({ searchResults: true });
        });

      event.preventDefault();
    }

  handleSubmitWatched(event) {
    this.setState({
      filterWatched: !this.state.filterWatched
    });
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Watched" name="ToWatch"/>
        <input type="submit" value="To Watch" name="Watched"/>
      </form>
    );
  }
}

module.exports = Filter;