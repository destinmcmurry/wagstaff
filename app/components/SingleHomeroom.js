import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

const SingleHomeroom = (props) => {

  return (
    <div> 
      <h1>all students should go here</h1>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
  }
}

export default connect(mapState)(SingleHomeroom);