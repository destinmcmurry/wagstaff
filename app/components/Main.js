import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Homerooms from './Homerooms';
import Students from './Students';

export default class Main extends Component {

  render() {
    return (
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path='/homerooms' component={Homerooms}/>
              <Route exact path='/students' component={Students}/>
              <Redirect to='/homerooms' />
            </Switch>
          </main>
        </div>
    )
  }

}
