import React from 'react';

class FormSubmit extends React.Component {
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
      this.props.handleSubmit(this.state.value);
    }
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
        <input type="submit" value={this.props.action} />
      </form>
    );
  }
}

module.exports = FormSubmit;