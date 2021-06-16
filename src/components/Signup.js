import React, { Component } from 'react';
import '../assets/css/login_signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="login-signup-heading">Sign Up</h1>
        <div className="signup-wrapper">
          <form className="login-signup-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Phone No." />
            <input type="password" placeholder="Your Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
