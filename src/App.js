import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos'

import AddTodo from './components/AddTodo'
import tempTodoList from './temporary_data/temp_todos'
import Header from './components/Header'
import Navbar from './components/layout/Navbar';

import About from './components/pages/About'
import TodoList from './components/pages/TodoList'

import './App.css'
import uuid from 'uuid'

class App extends Component {
  
  state = {
      todos: tempTodoList
  }

  markComplete = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
      } 
            )})
  }
  
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  
  addTodo = (title) => {
    const newTodo = {
        id:uuid.v4(),
        title,
        completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  
  render() {
     
    return (
       <Router>
         <div className="App">
           <Navbar />
           <div className="container"> 
             <Header />
             <Route exact path = "/" render={props =>(
                <React.Fragment>
                   <h3>Вот что нужно делать:</h3>
                   <AddTodo addTodo={this.addTodo} />
                   <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
             )}/>
             <Route path = "/about" component = {About}/>
             <Route path = "/todolist" component = {TodoList}/>

           </div>
         </div>  
       </Router>
      );
   }
}

export default App;
