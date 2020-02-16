import React from 'react';
import {headerStyle, linkInHeaderStyle as linkStyle} from './component_styles/HeaderStyle'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style = {linkStyle} to='/'>Home</Link> | <Link style = {linkStyle}to="/about">About</Link>
    </header>
    )
}


export default Header;