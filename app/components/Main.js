import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Homerooms from './Homerooms';
import { fetchHomerooms } from '../reducers/homerooms';

class Main extends Component {

  componentDidMount () {
    this.props.fetchHomerooms();
    console.log('mounted!');
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Wagstaff Elementary</h1>
        </nav>
        <Homerooms homerooms={this.props.homerooms}/>
      </div>
    )
  }

}

const mapState = (state, ownProps) => {
  return {
    homerooms: state.homerooms,
  }
}

const mapDispatch = dispatch => {
  return {
    fetchHomerooms() {
      dispatch(fetchHomerooms())
    }
  }
}

export default connect(mapState, mapDispatch)(Main);
