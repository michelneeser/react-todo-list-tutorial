import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

  state = {
    title: ''
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input type="text" name="title"
          placeholder="Add Todo ..."
          style={inputStyle}
          value={this.state.title}
          onChange={this.onChange} />
        <input type="submit" value="submit" className="btn" />
      </form>
    )
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }
}

const formStyle = {
  display: 'flex'
}

const inputStyle = {
  flex: '10',
  padding: '5px'
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
