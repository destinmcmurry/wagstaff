import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../store';
import AddHomeroom from './AddHomeroom';

const Homerooms = (props) => {

  const { homerooms } = props;

  return (
    <div>
      <ul>
        {
          homerooms.map(homeroom => {
            return (
              <div>
                <li key={homeroom.id} className='homeroom-block'>
                  <NavLink to={`/homerooms/${homeroom.id}`}>
                  <img src={homeroom.teacherImg} />
                    <div className='block'>
                      <h1>{homeroom.teacher}'s Class</h1>
                      <h4>Room {homeroom.roomNumber}</h4>
                    </div>
                  </NavLink>
                </li>
              </div>
            )
          })
        }
      </ul>
      <br/>
      <div id='footer-form'>
        <h3>New Homeroom</h3>
        <AddHomeroom />
      </div>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    homerooms: state.homerooms
  }
}

export default connect(mapState)(Homerooms);