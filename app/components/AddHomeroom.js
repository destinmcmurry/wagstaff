import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postHomeroom } from '../reducers/homerooms';

class AddHomeroom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      teacher: '',
      roomNumber: '',
      teacherImg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
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
        <br/>
        Room Number:
        <br/>
        <input type='text' name='roomNumber' value={this.state.roomNumber} onChange={this.handleChange}/>
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