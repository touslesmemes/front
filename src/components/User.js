import React, { Component } from 'react';
import * as API from './API/User'
import '../App.css';

class User extends Component {

  constructor() {
    console.log("constru User")
    API.getUsers()
    API.getUser('249791e7-f0af-41f0-9dc3-53eb26c69c11')
    super()
  }

  componentDidMount() {// after render
    document.title = "Tous les memes";
  }


  render() {
    return (
      <h2>user</h2>
    );
  }
}

export default User;
