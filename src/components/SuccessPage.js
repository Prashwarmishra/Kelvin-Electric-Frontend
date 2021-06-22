import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

function SuccessPage(props) {
  return (
    <div className="wrapper">
      <Result
        status="success"
        title="Booking of your Kelvin Electric 250x Successful!"
        subTitle="Woo Hoo! Thank you for choosing Kelvin Electric. 
        We will soon get in touch with you, in the meanwhile check your 
        e-mail for more details."
        extra={[
          <Link to="/">
            <Button type="primary" key="console">
              Back Home
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
}

export default SuccessPage;
