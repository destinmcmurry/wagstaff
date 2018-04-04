import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/students';

class AddStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gpa: '',
      studentImg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { handleSubmit, homeroomId } = this.props;

    return (
      <form onSubmit={event => handleSubmit(this.state, event, homeroomId)}>
        First Name:
        <br/>
        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
        <br/>
        Last Name:
        <br/>
        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
        <br/>
        gpa:
        <br/>
        <input type='text' name='gpa' value={this.state.gpa} onChange={this.handleChange}/>
        <br/>
        Image Url:
        <br/>
        <input type='text' name='studentImg' value={this.state.studentImg} onChange={this.handleChange}/>
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
    handleSubmit (form, event, homeroomId) {
      event.preventDefault()
      dispatch(postStudent({...form, homeroomId }));
    }
  }
}

export default connect(mapState, mapDispatch)(AddStudent);