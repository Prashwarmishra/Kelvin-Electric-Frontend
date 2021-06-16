import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
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

  handleChange = (userField, value) => {
    this.setState({
      [userField]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = this.state;
    if (name && email && password === confirmPassword) {
      console.log('/////////////', this.state);
      this.props.dispatch(
        signup(name, email, phone, password, confirmPassword)
      );
    }
  };

  render() {
    const { name, email, phone, password, confirmPassword } = this.state;
    return (
      <div className="wrapper">
        <h1 className="login-signup-heading">Sign Up</h1>
        <div className="signup-wrapper">
          <form className="login-signup-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => this.handleChange('email', e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Your Phone No."
              onChange={(e) => this.handleChange('phone', e.target.value)}
              value={phone}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="Confirm Your Password"
              required
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={confirmPassword}
            />
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
