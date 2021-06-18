import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/testride.css';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import testRide from '../assets/images/testride.jpg';
import { locateDealership } from '../actions/dealerships';
import { bookTestride, clearTestRideBookingMessage } from '../actions/testride';

const { Option } = Select;

class TestRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDealershipList: [],
      dealershipName: '',
      date: '',
      time: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(locateDealership());
  }

  componentWillUnmount() {
    this.props.dispatch(clearTestRideBookingMessage());
  }

  handleCitySelect = (city) => {
    const { dealershipList } = this.props.dealerships;

    const cityDealershipList = dealershipList.filter(
      (dealership) => dealership.city === city
    );
    this.setState({
      cityDealershipList,
    });
  };

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dealershipName, date, time } = this.state;
    if (dealershipName && date && time) {
      this.props.dispatch(bookTestride(dealershipName, date, time));
    }
  };

  render() {
    const { isLoggedin } = this.props.auth;
    const { cityDealershipList } = this.state;
    const { success, error, inProgress } = this.props.testride;

    return (
      <div className="wrapper">
        <h1 className="login-signup-heading">Test Ride</h1>
        {error && <div className="error-dialog">{error}</div>}
        {success && <div className="success-dialog">{success}</div>}
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
            <div className="testride-container">
              <img src={testRide} alt="testride img" />
              <form className="testride-form">
                <div className="field">
                  <div className="field-label">Select City</div>
                  <Select
                    defaultValue="No City Selected"
                    onChange={this.handleCitySelect}
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
                    defaultValue="No Dealership selected"
                    onChange={(e) => this.handleChange('dealershipName', e)}
                    className="city-select field-value"
                  >
                    {cityDealershipList.map((dealership) => (
                      <Option
                        value={dealership.dealershipName}
                        key={dealership._id}
                      >
                        {dealership.dealershipName}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="field">
                  <div className="field-label">Select Date</div>
                  <DatePicker
                    className="city-select field-value"
                    onChange={(e) => this.handleChange('date', e._d)}
                  />
                </div>

                <div className="field">
                  <div className="field-label">Select Time</div>
                  <Select
                    defaultValue="No Time Selected"
                    onChange={(e) => this.handleChange('time', e)}
                    className="city-select field-value"
                  >
                    <Option value="2">2 PM - 3PM</Option>
                    <Option value="3">3 PM - 4PM</Option>
                    <Option value="4">4 PM - 5PM</Option>
                    <Option value="5">5 PM - 6PM</Option>
                    <Option value="6">6 PM - 7PM</Option>
                  </Select>
                </div>
                {inProgress ? (
                  <button disabled>Scheduling your ride...</button>
                ) : (
                  <button onClick={this.handleSubmit}>
                    Schedule Test-Ride
                  </button>
                )}
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
    dealerships: state.dealerships,
    testride: state.testride,
  };
}

export default connect(mapStateToProps)(TestRide);
