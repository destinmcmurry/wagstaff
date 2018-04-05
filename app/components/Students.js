import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';

const Students = (props) => {

  const { students, homerooms } = props;


  return (
    <div>
      <h1 id='page-header'>All Students</h1>
      <ul>
        {
          students.map(student => {
            return (
              <div key={student.id}>
                <li className='student-block'>
                  <Link to={`/students/${student.id}`}>
                    <img src={student.studentImg} />
                    <div className='block'>
                      <h1>{student.name}</h1>
                      <h4>email: {student.email}</h4>
                      <p>gpa: {student.gpa}</p>
                      {
                        homerooms.filter(homeroom => homeroom.id === student.homeroomId).length ? (<p>{(homerooms.find(homeroom => homeroom.id === student.homeroomId)).teacher}'s Homeroom</p>) : <small>not assigned a homeroom</small>
                      }
                    </div>
                  </Link>
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
    students: state.students,
    homerooms: state.homerooms
  }
}

export default connect(mapState)(Students);