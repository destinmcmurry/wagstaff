import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Homerooms from './Homerooms';
import Students from './Students';
import SingleStudent from './SingleStudent';
import SingleHomeroom from './SingleHomeroom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/homerooms' component={Homerooms}/>
              <Route exact path='/students' component={Students}/>
              <Route path='/students/:studentId' component={SingleStudent}/>
              <Route path='/homerooms/:homeroomId' component={SingleHomeroom}/>
              <Redirect to='/'/>
            </Switch>
          </main>
        </div>
    )
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

export default withRouter(
  connect(null, mapDispatch)(Main)
);