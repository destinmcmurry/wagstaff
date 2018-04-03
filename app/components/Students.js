import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { fetchStudents } from '../reducers/students';

class Students extends Component {

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.students.map(student => {
              return (
                <li key={student.id} className='student-block'>
                  <img src={student.studentImg} />
                  <h1>{student.name}</h1>
                  <p>gpa: {student.gpa}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

const mapState = (state, ownProps) => {
  return {
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStudents() {
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapState, mapDispatch)(Students);