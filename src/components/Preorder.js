import React, { Component } from 'react';

import kelvin_black from '../assets/images/kelvin_black.png';
import kelvin_yellow from '../assets/images/kelvin_yellow.png';
import kelvin_grey from '../assets/images/kelvin_grey.png';
import { APIUrls } from '../helpers/urls';
import { getAuthHeaderWithToken } from '../helpers/utils';

class Preorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCancelled: false,
    };
  }

  handleCancellation = async (e) => {
    e.preventDefault();
    console.log('Triggered');
    const preorderId = this.props.preorder._id;
    console.log('user cancellation button', preorderId);
    const url = APIUrls.cancelOrder(preorderId);
    const options = {
      method: 'GET',
      headers: getAuthHeaderWithToken(),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      this.setState({
        orderCancelled: true,
      });
    }
  };

  render() {
    const { orderCancelled } = this.state;
    const { preorder } = this.props;
    const { color, cancelled } = preorder;
    return (
      <div className="ac-parent">
        <div className="ac-child">
          {color === 'Lava Grey' && <img src={kelvin_grey} alt="scooter-img" />}
          {color === 'Granite Black' && (
            <img src={kelvin_black} alt="scooter-img" />
          )}
          {color === 'Accent Yellow' && (
            <img src={kelvin_yellow} alt="scooter-img" />
          )}
        </div>
        <div className="ac-child">
          <span className="ac-address">Delivery Address</span>
          <span className="ac-addressName">{preorder.shippingAddress}</span>
          <span className="ac-addressLandmark">
            {preorder.shippingLandmark}
          </span>
          <span className="ac-addressCity">{preorder.shippingCity}</span>
        </div>
        <div className="ac-child ac-btn-group">
          <button className="ac-child-button">Support</button>
          {cancelled || orderCancelled ? (
            <button className="ac-child-button">Cancelled</button>
          ) : (
            <button
              className="ac-child-button"
              onClick={this.handleCancellation}
            >
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Preorder;
