import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Mike',
      email: 'Tyson@mdr.com'
    }
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  submit() {
      console.log('first name:', this.state.firstName);
      console.log('last name:', this.state.lastName);
  }

  onFirstNameChange(e) {
     this.setState({
       firstName: e.target.value
     })
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  componentDidMount() {// after render
    document.title = "React js";
  }

  handleModif() {
    this.setState({change : 1})
    console.log(this.state.change);
  }


  render() {

    return (
      <div>
        <h1>Setting</h1>

        <form action="javascript:void(0)"
              onSubmit={this.submit.bind(this)}>

            <div>
              <p> Pseudo : </p>
                <input ref="pseudo"
                       type="text"
                       placeholder="your first name..."
                       required="required"
                       onChange={this.onFirstNameChange}
                       value={this.state.firstName}/>
            </div>

            <div>
                <p> Email : </p>
                <input ref="email"
                       type="text"
                       placeholder="your email..."
                       required="required"
                       onChange={this.onEmailChange}
                       value={this.state.email} />
            </div>

            <button>Modify</button>

        </form>
      </div>
    );
  }
}

export default Login;
