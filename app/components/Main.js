import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Homerooms from './Homerooms';
import Students from './Students';
import SingleStudent from './SingleStudent';
import SingleHomeroom from './SingleHomeroom';
import { connect } from 'react-redux';
import store from '../store';
import { fetchStudents } from '../reducers/students';
import { fetchHomerooms } from '../reducers/homerooms';

class Main extends Component {

  componentDidMount() {
    this.props.fetchStudents();
    this.props.fetchHomerooms();
  }

  render() {
    return (
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path='/homerooms' component={Homerooms}/>
              <Route exact path='/students' component={Students}/>
              <Route path='/students/:id' component={SingleStudent}/>
              <Route path='/homerooms/:id' component={SingleHomeroom}/>
              <Redirect to='/homerooms'/>
            </Switch>
          </main>
        </div>
    )
  }

}

const mapState = (state, ownProps) => {
  return {
    homerooms: state.homerooms,
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStudents() {
      dispatch(fetchStudents())
    },
    fetchHomerooms() {
      dispatch(fetchHomerooms())
    }
  }
}

export default connect(mapState, mapDispatch)(Main);