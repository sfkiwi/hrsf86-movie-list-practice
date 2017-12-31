import React from 'react';
class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value.length) {
      this.props.addMovie(this.state.value);
    }
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-12 bg-white text-secondary" onSubmit={this.handleSubmit}>
          <div className="row"> 
            <input className="col-md-5 btn btn-light mx-2 mt-2 text-left" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter movie title to add" />
            <input className="col-md-2 btn btn-primary mx-2 mt-2" type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

module.exports = AddMovie;