import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <div id='navbar'>
      <h1>Wagstaff Elementary</h1>
      <div id='nav-links'>
        <NavLink to='/homerooms'> Homerooms |</NavLink>
        <NavLink to='/students'> Students </NavLink>
      </div>
    </div>
  )
}