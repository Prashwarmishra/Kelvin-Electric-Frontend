import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import kelvin_black from '../assets/images/kelvin_black.png';
import kelvin_yellow from '../assets/images/kelvin_yellow.png';
import kelvin_grey from '../assets/images/kelvin_grey.png';
import { Radio } from 'antd';
import { Footer } from '.';

import '../assets/css/testride.css';
import '../assets/css/prebook.css';

// import testRide from '../assets/images/prebook.jpg';
const { Option } = Select;

class Prebook extends Component {
  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    const { isLoggedin } = this.props.auth;

    return (
      <div>
        <div className="wrapper">
          <h1 className="login-signup-heading">Ready to Onboard?</h1>
          {/* {error && <div className="error-dialog">{error}</div>}
        {success && <div className="success-dialog">{success}</div>} */}
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
              <p className="testride-description">
                Be inspired - by your Kelvin, which takes you to any destination
                safely and reliably- and stylish on top! Take an active part in
                reducing city noise and exhaust gas, while taking advantage of
                the benefits of modern electric mobility. Kelvin electric offers
                you long ranges, short charging times and the possibility to
                individualize your E-Scooter according to your needs... Of
                course: Driving fun and the feeling of freedom are also
                absolutely guaranteed!
              </p>
              <form className="testride-form prebook-form">
                <div className="field img-field">
                  <div className="field-label">Select Color</div>
                  <Radio.Group>
                    <Radio value="Granite Black">
                      <img
                        src={kelvin_black}
                        alt="scooter-img"
                        className="scooter-color"
                      />
                      <p className="color-text">Granite Black</p>
                    </Radio>
                    <Radio value="Accent Yellow">
                      <img
                        src={kelvin_yellow}
                        alt="scooter-img"
                        className="scooter-color"
                      />
                      <p className="color-text">Accent Yellow</p>
                    </Radio>
                    <Radio value="Lava Grey">
                      <img
                        src={kelvin_grey}
                        alt="scooter-img"
                        className="scooter-color"
                      />
                      <p className="color-text">Lava Grey</p>
                    </Radio>
                  </Radio.Group>
                </div>

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
                    {/* {cityDealershipList.map((dealership) => (
                      <Option
                        value={dealership.dealershipName}
                        key={dealership._id}
                      >
                        {dealership.dealershipName}
                      </Option>
                    ))} */}
                  </Select>
                </div>

                <div className="field">
                  <div className="field-label">Add Address</div>
                  <input type="text" className="field-input" />
                </div>

                <div className="field">
                  <div className="field-label">Add Landmark</div>
                  <input type="text" className="field-input" />
                </div>

                <button onClick={this.handleSubmit}>Proceed to Pay</button>
              </form>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Prebook);
