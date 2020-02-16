import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import uuid from 'uuid';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/auth/Login';

import tempTodoList from './temporary_data/temp_todos';
import {my_private_client_id, my_private_security_issuer, my_private_security_URL} from './Private_data/Security_essentials';

import './App.css';

function onAuthRequired({history}) {
    history.push('./login')
}

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
        <Security issuer={my_private_security_issuer}
                  client_id={my_private_client_id}
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
         <div className="App">
           <div className="container"> 
             <Header />
             <SecureRoute path = "/TodoList" exact = {true} render={props =>(
               <React.Fragment>
                   <h3>Вот что нужно делать:</h3>
                   <AddTodo addTodo={this.addTodo} />
                   <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
             )}/>
             <Route path = "/about" exact = {true} component = {About}/>
             <Route path = "/" exact = {true} component = {Home}/>
             <Route path = '/login' exact = {true} render={() => <Login
                baseUrl={my_private_security_URL}/>}/>
           <Route path = '/implicit/callback' component={ImplicitCallback}/>
           </div>
         </div> 
         </Security>
       </Router>
      );
   }
}

export default App;
