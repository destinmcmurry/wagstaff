import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

const SingleStudent = (props) => {

  const student = props.students.filter(student => student.id === Number(props.match.params.id))
  const stu = student[0] || {};

  return (
    <div id='single-student'> 
      <img src={stu.studentImg} />
      <h1>{stu.name}</h1>
      <h4>{stu.email}</h4>
      <p>gpa: {stu.gpa}</p>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
    // wait does it have access to the props match params id ?
  }
}

export default connect(mapState)(SingleStudent);