import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searchResults: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSearch(event) {
    console.log("Handle Search", this.state.value);
    if (this.state.searchResults) {
      this.props.clearSearch();
      this.setState({
        searchResults: false,
        value: ''
      });

    } else {
      if (this.state.value.length) {
        this.props.search(this.state.value)
          .then((results) => {
            this.props.searchResults(results)
            this.setState({ searchResults: true });
          });
      }
    }
    event.preventDefault();
  }

  render() {
    console.log("Rendering Search View");
    let button;

    if (this.state.searchResults) {
      button = <input type="submit" value="clear results" />
    } else {
      button = <input type="submit" value="go" />
    }
    return (
      <form onSubmit={this.handleSearch}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
        {button}
      </form>
    );
  }
}

module.exports = Search;