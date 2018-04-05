import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import AddStudent from './AddStudent';
// import { deleteHomeroom } from '../reducers/homerooms';

const SingleHomeroom = (props) => {

  const { students, homeroom, homeroomId } = props;
  const hr = homeroom[0] || { teacher: '' };

  return (
    <div>
    <h1 id='page-header'>{hr.teacher}'s Students</h1>
      <ul> 
        { students.map(student => {
            return (
            <div key={student.id}>
              <li className='student-block'>
                <Link to={`/students/${student.id}`}>
                  <img src={student.studentImg} />
                  <div>
                    <h1>{student.name}</h1>
                    <h4>{student.email}</h4>
                    <p>gpa: {student.gpa}</p>
                  </div>
                </Link>
              </li>
            </div>
            )
          })
        }
        { students && !students.length && <small>There are no students in this homeroom yet.</small>}
      </ul>
      <button id='delete-btn'> ❌ Delete Homeroom </button>
      <br/>
      <div id='footer-form'>
        <h3>New Student</h3>
        <AddStudent homeroomId={homeroomId}/>
      </div>
    </div>
  )

}

const mapState = (state, ownProps) => {

  const homeroomId = Number(ownProps.match.params.homeroomId);

  return {
    students: state.students.filter(student => student.homeroomId === homeroomId),
    homeroom: state.homerooms.filter(homeroom => homeroom.id === homeroomId),
    homeroomId
  }
}

export default connect(mapState)(SingleHomeroom);