import React from 'react';

function DealershipCard(props) {
  console.log('dealership card ', props.dealership);
  return (
    <div className="dealership-card">
      <div className="dealership-name">
        {' '}
        <i className="fas fa-store-alt"></i> {props.dealership.dealershipName}
      </div>
      <div className="dealership-address">
        {' '}
        <span>
          {' '}
          <i className="fas fa-map-pin"></i> Address
        </span>{' '}
        {props.dealership.address}
      </div>
      <div className="dealership-phone">
        {' '}
        <span>
          {' '}
          <i className="fas fa-phone"></i> Contact
        </span>{' '}
        {props.dealership.phone}
      </div>
    </div>
  );
}

export default DealershipCard;
