import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import AddStudent from './AddStudent';

const SingleHomeroom = (props) => {

  return (
    <div> 
      <h1>all students will go here eventually</h1>
      <br/>
      <div id='footer-form'>
        <h3>New Student</h3>
        <AddStudent />
      </div>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
  }
}

export default connect(mapState)(SingleHomeroom);