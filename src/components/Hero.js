import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../assets/css/carousel.css';
import kelvin_black from '../assets/images/kelvin_black.png';
import kelvin_yellow from '../assets/images/kelvin_yellow.png';
// import kelvin_blue from '../assets/images/kelvin_blue.png';
import kelvin_grey from '../assets/images/kelvin_grey.png';
import kelvin_last from '../assets/images/kelvin_last.png';

const contentStyle = {
  height: 600,
  width: 1389,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

export default class Hero extends Component {
  render() {
    return (
      <div className="carousel-section">
        <Carousel autoplay>
          <div
            className="hero-item hero-item-1"
            style={{ background: 'antiquewhite' }}
          >
            <div style={contentStyle}>
              <h3 className="hero-heading">Not your Regular Scooter</h3>

              <img src={kelvin_yellow} alt="scooter-img" />

              <p className="hero-info">
                Kelvin 250x has a built in software function with advanced
                diagnostics, features and an app (both iOS and Android) that
                integrates all the data at your fingertips.
              </p>
            </div>
          </div>

          <div className="hero-item hero-item-2">
            <div style={contentStyle}>
              <h3 className="hero-heading">Easy to Charge</h3>
              <img src={kelvin_black} alt="scooter-img" />

              <p className="hero-info">
                Plug into any standard 3-pin outlet and your electric scooter
                battery will be recharged! You don't need to keep looking for
                charging stations or wait in long lines.
              </p>
            </div>
          </div>

          <div className="hero-item hero-item-3">
            <div style={contentStyle}>
              <h3 className="hero-heading">Great Savings</h3>

              <img src={kelvin_grey} alt="scooter-img" />

              <p className="hero-info">
                With no petrol consumption, 3 year onsite warranty and low
                maintanance, Kelvin 250x is a great investment with brilliant
                savings!
              </p>
            </div>
          </div>

          <div className="hero-item hero-item-4">
            <div style={contentStyle}>
              <h3 className="hero-heading">No Air and Noise Pollution</h3>

              <img src={kelvin_last} alt="scooter-img" />

              <p className="hero-info">
                We're helping conserve our environment with small contribution.
                Kelvin 250x gives 0 CO2 Emissions and are extremly silent in
                their operations.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
