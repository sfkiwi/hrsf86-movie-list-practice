import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: false,
      filterToWatch: false,
      filterWatched: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(event) {
    if (event.target.name == 'ToWatch') {
      this.setState({ 
        filter: !this.state.filter,
        filterToWatch: !this.state.filterToWatch
      });

      this.props.filter(event.target.name)
        .then((results) => {
          this.props.searchResults(results)
          this.setState({ searchResults: true });
        });

      event.preventDefault();
    }

    if (event.target.name == 'Watched') {
      this.setState({
        filter: !this.state.filter,
        filterWatched: !this.state.filterWatched
      });
      event.preventDefault();
    }
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