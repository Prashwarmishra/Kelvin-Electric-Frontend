import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAuthMessages, resetPassword } from '../actions/auth';
import '../assets/css/login_signup.css';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
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
    const userId = this.props.match.params.userId;
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      this.props.dispatch(resetPassword(userId, password, confirmPassword));
      this.setState({
        password: '',
        confirmPassword: '',
      });
    }
  };

  render() {
    const { password, confirmPassword } = this.state;
    const { success, error, inProgress } = this.props.auth;

    return (
      <div className="wrapper">
        {success && <div className="success-dialog">{success}</div>}
        {error && <div className="error-dialog">{error}</div>}

        <h1 className="login-signup-heading">Reset Password</h1>
        <div className="signup-wrapper">
          {!inProgress && (
            <form className="login-signup-form">
              <input
                type="password"
                placeholder="Your New Password"
                required
                onChange={(e) => this.handleChange('password', e.target.value)}
                value={password}
              />
              <input
                type="password"
                placeholder="Confirm Your New Password"
                required
                onChange={(e) =>
                  this.handleChange('confirmPassword', e.target.value)
                }
                value={confirmPassword}
              />
              <button onClick={this.handleSubmit}>Reset Password</button>
            </form>
          )}
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

export default connect(mapStateToProps)(ResetPassword);
