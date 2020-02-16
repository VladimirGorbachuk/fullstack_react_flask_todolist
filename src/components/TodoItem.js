import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import {itemCompletedStyle,itemPendingStyle} from './component_styles/TodoItemStyles' #ItDoesNotChangeStyle
import btnStyle from './component_styles/DeleteButtonStyle'

export class TodoItem extends Component {
  
  getStyle = () => {//const text_style = this.props.todo.completed ? itemCompletedStyle : itemPendingStyle #ItDoesNotChangeStyle
    return  { //text_style #ItDoesNotChangeStyle
      textDecoration: this.props.todo.completed ? 'line-through' : 'None'
    }
  }
  
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style = { this.getStyle() }>
        
        <p> 
          <input type = "checkbox" onChange={this.props.markComplete.bind(this,id)}/> {'  '}
          { title }
          <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
