import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AddHomeroom extends Component {

  // how connect to store ... 
  // because it was said in this class forms should be smart
  // so should it have local state? 
  // or should i add a 'newhomeroom' field to the store state?

  render() {
    return (
      <form>
        Teacher Name:
        <br/>
        <input type='text' teacher='teacher'/>
        <br/>
        Room Number:
        <br/>
        <input type='text' roomNumber='roomNumber'/>
        <br/>
        Image Url:
        <br/>
        <input type='text' teacherImg='teacherImg'/>
        <br/>
        <br/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }

}
