import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { fetchHomerooms } from '../reducers/homerooms';

class Homerooms extends Component {

  componentDidMount() {
    this.props.fetchHomerooms();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.homerooms.map(homeroom => {
              return (
                <li key={homeroom.id} className='homeroom-block'>
                  <img src={homeroom.teacherImg} />
                  <h1>{homeroom.teacher}'s Class</h1>
                  <h4>Room {homeroom.roomNumber}</h4>
                  <p>{homeroom.description}</p>
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
    homerooms: state.homerooms
  }
}

const mapDispatch = dispatch => {
  return {
    fetchHomerooms() {
      dispatch(fetchHomerooms())
    }
  }
}

export default connect(mapState, mapDispatch)(Homerooms);