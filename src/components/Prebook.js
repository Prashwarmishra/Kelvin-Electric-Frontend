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
import { locateDealership } from '../actions/dealerships';
import { APIUrls } from '../helpers/urls';
import { getAuthHeaderWithToken, getFormBody } from '../helpers/utils';

const { Option } = Select;

class Prebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDealershipList: [],
      color: '',
      shippingCity: '',
      shippingDealershipName: '',
      shippingAddress: '',
      shippingLandmark: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(locateDealership());
  }

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  handleCitySelect = (city) => {
    const { dealershipList } = this.props.dealerships;
    const cityDealershipList = dealershipList.filter(
      (dealership) => dealership.city === city
    );

    this.setState({
      cityDealershipList,
      shippingCity: city,
    });
  };

  loadRazorPay = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
    });
  };

  acceptPreorder = async (orderId, paymentId) => {
    const url = APIUrls.preorder();
    const {
      color,
      shippingCity,
      shippingDealershipName,
      shippingAddress,
      shippingLandmark,
    } = this.state;

    const options = {
      method: 'POST',
      headers: getAuthHeaderWithToken(),
      body: getFormBody({
        color,
        shippingCity,
        shippingDealershipName,
        shippingAddress,
        shippingLandmark,
        orderId,
        paymentId,
      }),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log('PREORDER DETAILS ARE: ', data);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const {
      color,
      shippingCity,
      shippingDealershipName,
      shippingAddress,
      shippingLandmark,
    } = this.state;

    const self = this;

    const razorpayLoaded = await this.loadRazorPay(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!razorpayLoaded) {
      return alert(
        'Razorpay merchant failed to load, please try back in some time'
      );
    }
    const url = APIUrls.createPaymentReciept();
    const createPaymentReciept = await fetch(url, {
      method: 'POST',
    });

    const paymentReceipt = await createPaymentReciept.json();

    console.log('paymentReceipt', paymentReceipt);

    const options = {
      key: paymentReceipt.key,
      amount: paymentReceipt.data.amount,
      currency: paymentReceipt.data.currency,
      name: 'Kelvin Electric',
      description: 'Preorder for Kelvin 250x',
      image: 'https://example.com/your_logo',
      order_id: paymentReceipt.data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);

        self.acceptPreorder(
          response.razorpay_order_id,
          response.razorpay_payment_id
        );
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    if (
      color &&
      shippingCity &&
      shippingDealershipName &&
      shippingAddress &&
      shippingLandmark
    ) {
      var razorpayOptions = new window.Razorpay(options);
      razorpayOptions.open();
    }
  };

  render() {
    // console.log('/////////////////', this.state);
    const { cityDealershipList } = this.state;
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
                  <Radio.Group
                    onChange={(e) => this.handleChange('color', e.target.value)}
                  >
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
                    onChange={(e) =>
                      this.handleChange('shippingDealershipName', e)
                    }
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
                  <div className="field-label">Add Address</div>
                  <input
                    type="text"
                    className="field-input"
                    onChange={(e) =>
                      this.handleChange('shippingAddress', e.target.value)
                    }
                  />
                </div>

                <div className="field">
                  <div className="field-label">Add Landmark</div>
                  <input
                    type="text"
                    className="field-input"
                    onChange={(e) =>
                      this.handleChange('shippingLandmark', e.target.value)
                    }
                  />
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
    dealerships: state.dealerships,
  };
}

export default connect(mapStateToProps)(Prebook);
