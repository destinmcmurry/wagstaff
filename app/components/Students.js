import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../store';

const Students = (props) => {

  const { students } = props;

  return (
    <div>
      <ul>
        {
          students.map(student => {
            return (
              <div key={student.id}>
                <li className='student-block'>
                  <NavLink to={`/students/${student.id}`}>
                    <img src={student.studentImg} />
                    <div className='block'>
                      <h1>{student.name}</h1>
                      <h4>{student.email}</h4>
                      <p>gpa: {student.gpa}</p>
                    </div>
                  </NavLink>
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  )

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
  }
}

export default connect(mapState)(Students);