import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/login_signup.css';

import { login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (userField, value) => {
    this.setState({
      [userField]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    const { error } = this.props.auth;
    const { email, password } = this.state;
    return (
      <div className="wrapper">
        {error && <div className="error-dialog">{error}</div>}

        <h1 className="login-signup-heading">Log In</h1>
        <div className="signup-wrapper">
          <form className="login-signup-form">
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => this.handleChange('email', e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={password}
            />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
