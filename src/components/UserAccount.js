import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Footer } from '.';
import '../assets/css/user_account.css';
import kelvin_black from '../assets/images/kelvin_black.png';

class UserAccount extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="account-card">
            <div className="account-heading">
              <h1>Your Bookings</h1>
            </div>
            <div className="account-container">
              <div className="ac-parent">
                <div className="ac-child">
                  <img src={kelvin_black} alt="scooter-img" />
                </div>
                <div className="ac-child">
                  <span className="ac-address">Delivery Address</span>
                  <span className="ac-addressName">
                    302, Sri Ganesha Enclave, 13th main
                  </span>
                  <span className="ac-addressLandmark">HAL 3rd Stage</span>
                  <span className="ac-addressCity">Bengaluru</span>
                </div>
                <div className="ac-child ac-btn-group">
                  <button className="ac-child-button">Support</button>
                  <button className="ac-child-button">Cancel Booking</button>
                </div>
              </div>

              <div className="ac-parent">
                <div className="ac-child">
                  <img src={kelvin_black} alt="scooter-img" />
                </div>
                <div className="ac-child">
                  <span className="ac-address">Delivery Address</span>
                  <span className="ac-addressName">
                    302, Sri Ganesha Enclave, 13th main
                  </span>
                  <span className="ac-addressLandmark">HAL 3rd Stage</span>
                  <span className="ac-addressCity">Bengaluru</span>
                </div>
                <div className="ac-child ac-btn-group">
                  <button className="ac-child-button">Support</button>
                  <button className="ac-child-button">Cancel Booking</button>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(UserAccount);
