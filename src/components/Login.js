import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import '../assets/css/login_signup.css';
import { clearAuthMessages, login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthMessages());
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
      this.setState({
        email: '',
        password: '',
      });
    }
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    const { email, password } = this.state;

    if (isLoggedin) {
      return <Redirect to={'/test-ride'} />;
    }
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
            {inProgress ? (
              <button disabled className="disabled-btn">
                Logging In...
              </button>
            ) : (
              <button onClick={this.handleSubmit}>Log In</button>
            )}
          </form>
          <Link to="/forget-password">Forgot Password?</Link>
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
