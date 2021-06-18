import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/testride.css';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import testRide from '../assets/images/testride.jpg';

const { Option } = Select;

class TestRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealershipList: [],
      dealershipName: '',
      date: '',
      time: '',
    };
  }

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    const { isLoggedin } = this.props.auth;
    return (
      <div className="wrapper">
        <h1 className="login-signup-heading">Test Ride</h1>
        {!isLoggedin ? (
          <div className="alert-wrapper">
            <h3>You must be logged-in to continue:</h3>
            <Link to="/login">
              <button className="login-link">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="login-link">Create Account</button>
            </Link>
          </div>
        ) : (
          <div className="testride-wrapper">
            <h3>Please fill the following details:</h3>
            <div className="testride-container">
              <img src={testRide} alt="testride img" />
              <form className="testride-form">
                <div className="field">
                  <div className="field-label">Select City</div>
                  <Select
                    defaultValue="No value Selected"
                    onChange={this.handleChange}
                    className="city-select field-value"
                  >
                    <Option value="Mumbai">Mumbai</Option>
                    <Option value="Bengaluru">Bengaluru</Option>
                    <Option value="Hyderabad">Hyderabad</Option>
                  </Select>
                </div>

                <div className="field">
                  <div className="field-label">Select Dealership</div>
                  <Select
                    defaultValue="No value Selected"
                    onChange={this.handleChange}
                    className="city-select field-value"
                  >
                    <Option value="Mumbai">Mumbai</Option>
                    <Option value="Bengaluru">Bengaluru</Option>
                    <Option value="Hyderabad">Hyderabad</Option>
                  </Select>
                </div>

                <div className="field">
                  <div className="field-label">Select Date</div>
                  <DatePicker className="city-select field-value" />
                </div>

                <div className="field">
                  <div className="field-label">Select Time</div>
                  <Select
                    defaultValue="No value Selected"
                    onChange={this.handleChange}
                    className="city-select field-value"
                  >
                    <Option value="2">2 PM - 3PM</Option>
                    <Option value="3">3 PM - 4PM</Option>
                    <Option value="4">4 PM - 5PM</Option>
                    <Option value="5">5 PM - 6PM</Option>
                    <Option value="6">6 PM - 7PM</Option>
                  </Select>
                </div>
                <button>Schedule Test-Ride</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(TestRide);
