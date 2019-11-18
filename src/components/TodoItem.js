import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox"
            onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button style={buttonStyle}
            type="button" onClick={this.props.delete.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
}

const buttonStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
}

export default TodoItem
