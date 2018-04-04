import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../store';
import AddStudent from './AddStudent';

const SingleHomeroom = (props) => {

  return (
    <div>
      <ul> 
        {
          props.students.map(student => {
            if (student.homeroomId === Number(props.match.params.id)) {
              return (
                <li key={student.id} className='student-block'>
                <NavLink to={`/students/${student.id}`}>
                  <img src={student.studentImg} />
                  <h1>{student.name}</h1>
                  <h4>{student.email}</h4>
                  <p>gpa: {student.gpa}</p>
                </NavLink>
              </li>
              )
            }
          })
        }
      </ul>
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