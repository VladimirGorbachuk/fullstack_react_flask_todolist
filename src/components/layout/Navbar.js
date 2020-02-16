// I'm making it according to tutorial, idk if I need it yet
//this navbar looks awful, I will delete it later
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/*this class Navbar is basically snippet from
react authentication with okta
tutorial from youtube */

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
           <Link className="navbar-brand" to="/">
             Main page of ToDo WebApp
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNav"
           >
             <span className="navbar-toggler-icon"/>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <Link className="nav-link" to="/">
                   Home
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/todolist">
                   ToDo list 
                 </Link>              
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/about">
                   About page 
                 </Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
     )
   }
}
        

export default Navbar