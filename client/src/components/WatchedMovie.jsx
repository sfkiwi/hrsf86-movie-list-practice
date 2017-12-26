import React from 'react';

class WatchedMovie extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      watched: props.watched
    };
  }

  handleSubmit() {
    this.setState({watched: !this.state.watched});
    this.props.onWatched(this.state.watched);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          watched:
          <input type="checkbox" value={this.state.watched} />
        </label>
      </form>
    );
  }
}

module.exports = WatchedMovie;