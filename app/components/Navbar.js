import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div id='navbar'>
      <h1>Wagstaff Elementary</h1>
      <div id='nav-links'>
        <Link to='/homerooms'> Homerooms |</Link>
        <Link to='/students'> Students </Link>
      </div>
    </div>
  )
}