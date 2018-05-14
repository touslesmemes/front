import React, { Component } from 'react';

class Login extends Component {

  componentDidMount() {// after render
    document.title = "React js";
  }


  render() {

    return (
      <h1>Setting</h1>
    );
  }
}

export default Login;
