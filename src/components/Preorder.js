import React from 'react';

import kelvin_black from '../assets/images/kelvin_black.png';
import kelvin_yellow from '../assets/images/kelvin_yellow.png';
import kelvin_grey from '../assets/images/kelvin_grey.png';

function Preorder(props) {
  const { preorder } = props;
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
        <span className="ac-addressLandmark">{preorder.shippingLandmark}</span>
        <span className="ac-addressCity">{preorder.shippingCity}</span>
      </div>
      <div className="ac-child ac-btn-group">
        <button className="ac-child-button">Support</button>
        {cancelled ? (
          <button className="ac-child-button">Cancelled</button>
        ) : (
          <button className="ac-child-button">Cancel Booking</button>
        )}
      </div>
    </div>
  );
}

export default Preorder;
