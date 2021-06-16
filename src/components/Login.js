import React, { Component } from 'react';
import '../assets/css/login_signup.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="login-signup-heading">Log In</h1>
        <div className="signup-wrapper">
          <form className="login-signup-form">
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Your Password" required />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
