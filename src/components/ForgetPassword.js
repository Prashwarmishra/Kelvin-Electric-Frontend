import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/css/login_signup.css';
import { clearAuthMessages } from '../actions/auth';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    const { email } = this.state;
    if (email) {
      //   this.props.dispatch(login(email, password));
      this.setState({
        email: '',
      });
    }
  };

  render() {
    const { error, success } = this.props.auth;
    const { email } = this.state;
    return (
      <div className="wrapper">
        {success && <div className="success-dialog">{success}</div>}
        {error && <div className="error-dialog">{error}</div>}

        <h1 className="login-signup-heading">Forget Password</h1>
        <div className="signup-wrapper">
          <h4>
            Please provide your registered email below. We will send a password
            reset token on your email if it exists in the database.
          </h4>
          <form className="login-signup-form">
            <input
              type="email"
              placeholder="Your Registered Email"
              required
              onChange={(e) => this.handleChange('email', e.target.value)}
              value={email}
            />
            <button onClick={this.handleSubmit}>Reset Password</button>
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

export default connect(mapStateToProps)(ForgetPassword);
