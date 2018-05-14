import React, { Component } from 'react';

class Login extends Component {

  constructor() {
    console.log("constru")
    super()
  }

  componentDidMount() {// after render
    document.title = "React js";
  }


  render() {

    return (
      <body>
            <div className="container">
              <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" type="email"/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"/>
                <div className="checkbox">
                  <label>
                    <input value="remember-me" type="checkbox"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
        </body>
    );
  }
}

export default Login;
