import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/students';

class AddStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dirties: { firstName: false, lastName: false, gpa: false },
      firstName: '',
      lastName: '',
      gpa: '',
      studentImg: '',
      disabled: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    if (event.target.name === 'firstName') this.setState({dirties: { firstName: true }})
    if (event.target.name === 'lastName') this.setState({dirties: { lastName: true }})
    if (event.target.name === 'gpa') this.setState({dirties: { gpa: true }})
    if (this.state.firstName && this.state.lastName && this.state.gpa) this.setState({ disabled: false })
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { handleSubmit, homeroomId } = this.props;

    return (
      <form onSubmit={event => {
          handleSubmit(this.state, event, homeroomId)
          this.setState({
            dirties: { firstName: false, lastName: false, gpa: false },
            firstName: '',
            lastName: '',
            gpa: '',
            studentImg: '',
            diabled: true
          })
        }}>
        First Name:
        <br/>
        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
        { this.state.dirties.firstName && !this.state.firstName ? <div className="alert-warning">Please enter a first name</div> : null }
        <br/>
        Last Name:
        <br/>
        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
        { this.state.dirties.lastName && !this.state.lastName ? <div className="alert-warning">Please enter a last name</div> : null }
        <br/>
        gpa:
        <br/>
        <input type='text' name='gpa' value={this.state.gpa} onChange={this.handleChange}/>
        { this.state.dirties.gpa && !this.state.gpa ? <div className="alert-warning">Please enter a gpa</div> : null }
        { this.state.gpa && (Number.isNaN(parseInt(this.state.gpa)) || Number(this.state.gpa) < 0 || Number(this.state.gpa) > 4) ? <div className="alert-warning">Please enter a valid gpa</div> : null }
        <br/>
        Image Url:
        <br/>
        <input type='text' name='studentImg' value={this.state.studentImg} onChange={this.handleChange}/>
        <br/>
        <br/>
        <button type='submit' id='add-btn' disabled={this.state.disabled}> ➕ Add Student</button>
      </form>
    )
  }

}

const mapState = null;

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (form, event, homeroomId) {
      if (!form.studentImg) { form.studentImg = '/images/blank.png' }
      event.preventDefault()
      dispatch(postStudent({...form, homeroomId }));
    }
  }
}

export default connect(mapState, mapDispatch)(AddStudent);