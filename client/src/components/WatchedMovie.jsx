import React from 'react';

class WatchedMovie extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      watched: props.watched
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({watched: !this.state.watched});
    this.props.onWatched(!this.state.watched);
  }

  render() {
    return (
      <form onChange={this.handleSubmit}>
        <div className="form-check ml-4 mt-2">
          <label className="form-check-lable">
            <input className="form-check-input" type="checkbox" defaultChecked={this.state.watched} ref="watched" />
            watched
          </label>
        </div>
      </form>  
    );
  }
}

module.exports = WatchedMovie;