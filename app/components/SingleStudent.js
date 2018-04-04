import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

const SingleStudent = (props) => {

  const { students } = props;

  const wantedId = Number(props.match.params.id);
  const studentArr = students.filter(student => student.id === wantedId);
  const student = studentArr[0] || {};

  console.log('student we got ->', student);

  return (
    <div> 
      <h1>{student.name}</h1>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
  }
}

export default connect(mapState)(SingleStudent);