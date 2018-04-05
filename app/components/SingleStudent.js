import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { destroyStudent } from '../reducers/students';

const SingleStudent = (props) => {

  const { handleClick, studentArr, studentId, homerooms } = props;
  const homeroom = homerooms.filter(homeroom => homeroom.id === studentArr[0].homeroomId)

  return (
    <div>
    {
      studentArr.map(student => {
        return (
          <div key={student.id} id='single-student'>
            <img src={student.studentImg} />
            <h1>{student.name}</h1>
            <p>email: {student.email}</p>
            <p>gpa: {student.gpa}</p>
            {
            homeroom.length ? <p>{ homeroom[0].teacher }'s homeroom</p> : <small>not assigned a homeroom</small>
            }
            <br/>
          </div>
          )
        })
      }
      { homeroom.length ? <button id='update-btn'> ✏️ Update Information </button> : null }
      { homeroom.length ? <button id='delete-btn' onClick={()=>handleClick(studentId)}> ❌ Delete Student </button> : null }
    </div>
  )

}

// wouldn't need all those ternaries if my links worked... 🙄

const mapState = (state, ownProps) => {

  const studentId = Number(ownProps.match.params.studentId);

  return {
    studentArr: state.students.filter(student => student.id === studentId) || [],
    homerooms: state.homerooms,
    studentId
  }
}

const mapProps = (dispatch, ownProps) => {
  return {
    handleClick(studentId) {
      dispatch(destroyStudent(studentId), ownProps.history);
    }
  }
}

export default connect(mapState, mapProps)(SingleStudent);