import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postHomeroom } from '../reducers/homerooms';

class AddHomeroom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dirties: { teacher: false, roomNumber: false },
      teacher: '',
      roomNumber: '',
      teacherImg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    if (event.target.name === 'teacher') this.setState({dirties: { teacher: true }})
    if (event.target.name === 'roomNumber') this.setState({dirties: { roomNumber: true }})
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { handleSubmit } = this.props;


    return (
      <form onSubmit={event => handleSubmit(this.state, event)}>
        Teacher Name:
        <br/>
        <input type='text' name='teacher' value={this.state.teacher} onChange={this.handleChange}/>
        { this.state.dirties.teacher && !this.state.teacher ? <div className="alert-warning">Please enter a teacher</div> : null }
        <br/>
        Room Number:
        <br/>
        <input type='text' name='roomNumber' value={this.state.roomNumber} onChange={this.handleChange}/>
        { this.state.dirties.roomNumber && !this.state.roomNumber ? <div className="alert-warning">Please enter a room number</div> : null }
        { this.state.roomNumber && (this.state.roomNumber.length > 3) ? <div className="alert-warning">Sorry, that's not a valid room number</div> : null }
        <br/>
        Image Url:
        <br/>
        <input type='text' name='teacherImg' value={this.state.teacherImg} onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }

}

const mapState = null;

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (form, event) {
      event.preventDefault()
      dispatch(postHomeroom(form));
    }
  }
}

export default connect(mapState, mapDispatch)(AddHomeroom);