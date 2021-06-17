import React from 'react';
import '../assets/css/design.css';
import design_1 from '../assets/images/design_1.jpg';
import design_2 from '../assets/images/design_2.jpg';
import design_3 from '../assets/images/design_3.jpg';
import design_4 from '../assets/images/design_4.jpg';
import kelvin_black from '../assets/images/kelvin_black.png';
import kelvin_yellow from '../assets/images/kelvin_yellow.png';
import kelvin_grey from '../assets/images/kelvin_grey.png';
import app_1 from '../assets/images/app1.png';
import app_2 from '../assets/images/app_2.png';

function Design(props) {
  return (
    <div className="design-section">
      <div className="feature-card">
        <div className="design-img">
          <img src={design_1} alt="kelvin_img" />
        </div>
        <div className="design-info">
          <h3>Why Kelvin?</h3>
          <p>
            Your Kelvin will take you safely and comfortably to any destination
            with zero emissions and noise.
          </p>
          <p>
            Forget about having to search for a parking space, waiting for
            public transport or sitting in long traffic jams and experiencing
            high fuel prices. Instead, become part of our Kelvin family and
            switch to e-mobility now!
          </p>
        </div>
      </div>

      <div className="feature-card">
        <div className="design-info">
          <h3>Smart Technology</h3>
          <p>
            Of course, it’s a touchscreen! The Kelvin 7-inch touch-screen
            display is now bigger and improved, this gives you a direct view of
            your speed, range and consumption.
          </p>
          <p>
            Due to our ‘Keyless Start’, you don’t even have to take out your key
            – the scooter records you automatically. Simply press the start
            button and drive off!
          </p>
        </div>
        <div className="design-img">
          <img src={design_2} alt="kelvin_img" />
        </div>
      </div>

      <div className="feature-card">
        <div className="design-img">
          <img src={design_3} alt="kelvin_img" />
        </div>
        <div className="design-info">
          <h3>Brilliant LED lead Illumination</h3>
          <p>
            See and be seen: Your Kelvin headlamp package, illuminates the road
            perfectly and guarantees a clear view. Indicators, tail lights and
            brake lights shine brightly thanks to LED lighting – to relax and
            drive safely at night.
          </p>
          <p>
            Leave noise, stress and conventions behind and drive silently and
            electrically into your adventure.
          </p>
        </div>
      </div>

      <div className="feature-card">
        <div className="design-info">
          <h3>High Performance Battery Pack</h3>
          <p>
            In our self-developed ‘Kelvin Power′ battery, we have built-in
            high-performance LG cells, which will guarantee an energetic drive
            and long ranges, which will take you to any destination with a range
            of up to 180km.
          </p>
          <p>
            Charging has never been so flexible! All you need to do is remove
            the battery, plug it into a standard household socket and you’re
            ready to go!
          </p>
        </div>
        <div className="design-img">
          <img src={design_4} alt="kelvin_img" />
        </div>
      </div>

      <div className="performance-metrics">
        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">up to</span>
            <span className="pm-big">95</span>
            <span className="pm-small">km/hr</span>
          </div>
          <div className="pm-name">
            <span>Speed</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">up to</span>
            <span className="pm-big">12</span>
            <span className="pm-small">kW</span>
          </div>
          <div className="pm-name">
            <span>Engine Power</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">average</span>
            <span className="pm-big">90</span>
            <span className="pm-small">km</span>
          </div>
          <div className="pm-name">
            <span>Range</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">max</span>
            <span className="pm-big">125</span>
            <span className="pm-small">km</span>
          </div>
          <div className="pm-name">
            <span>Range</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">big</span>
            <span className="pm-big">7</span>
            <span className="pm-small">inch</span>
          </div>
          <div className="pm-name">
            <span>Touch Display</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">average</span>
            <span className="pm-big">150</span>
            <span className="pm-small">Nm</span>
          </div>
          <div className="pm-name">
            <span>Torque</span>
          </div>
        </div>

        <div className="pm-parent">
          <div className="pm-info">
            <span className="pm-small">upto</span>
            <span className="pm-big">3</span>
            <span className="pm-small">modular</span>
          </div>
          <div className="pm-name">
            <span>Li-ion Batteries</span>
          </div>
        </div>
      </div>

      <div className="app-section">
        <div className="as-heading">
          <h2>Kelvin Connect</h2>
        </div>
        <div className="as-parent">
          <div className="as-child">
            <img src={app_1} alt="app_1" />
          </div>
          <div className="as-child">
            <span>
              {' '}
              <i className="fas fa-route"></i> Control your Kelvin remotely
            </span>
            <span>
              {' '}
              <i className="fas fa-car-battery"></i> Check battery status
            </span>
            <span>
              {' '}
              <i className="fas fa-database"></i> Record driving statistics
            </span>
            <span>
              {' '}
              <i className="fab fa-bluetooth"></i> Connect your phone
            </span>
          </div>
          <div className="as-child">
            <img src={app_2} alt="app_2" />
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="ps-heading">
          <h2>Pricing</h2>
        </div>
        <div className="ps-parent">
          <div className="ps-child">
            <div className="ps-child-heading">
              <h2>Kelvin 250</h2>
            </div>
            <div className="ps-img">
              <img src={kelvin_black} alt="kelvin_black" />
            </div>
            <div className="ps-info">
              <span>1 Battery</span>
              <hr />
              <span>Normal Charging</span>
              <hr />
              <span>Rear disc brake</span>
              <hr />
              <span>No Cruise Control</span>
              <hr />
            </div>
            <div className="ps-price">&#8377; 85,560</div>
          </div>

          <div className="ps-child">
            <div className="ps-child-heading">
              <h2>Kelvin 250x</h2>
            </div>
            <div className="ps-img">
              <img src={kelvin_yellow} alt="kelvin_yellow" />
            </div>
            <div className="ps-info">
              <span>2 Batteries</span>
              <hr />
              <span>Fast Charging</span>
              <hr />
              <span>Dual disc brakes</span>
              <hr />
              <span>Cruise Control</span>
              <hr />
            </div>
            <div className="ps-price">&#8377; 99,560</div>
          </div>

          <div className="ps-child">
            <div className="ps-child-heading">
              <h2>Kelvin 250 plus</h2>
            </div>
            <div className="ps-img">
              <img src={kelvin_grey} alt="kelvin_grey" />
            </div>
            <div className="ps-info">
              <span>3 Batteries</span>
              <hr />
              <span>Wrap Charging</span>
              <hr />
              <span>Dual disc brakes</span>
              <hr />
              <span>Cruise Control</span>
              <hr />
            </div>
            <div className="ps-price">&#8377; 1,09,560</div>
          </div>
        </div>
      </div>

      <div className="button-section">
        <div className="bs-child">
          <h2>Need more Convincing?</h2>
          <p>
            Experience the unique driving fun and dynamics of our e-scooter at
            first hand. Convince yourself of the numerous advantages of
            e-mobility!
          </p>
          <button>Test Ride</button>
        </div>

        <div className="bs-child">
          <h2>Convinced?</h2>
          <p>
            Book your Kelvin by paying a small deposit fee of &#8377; 2500,
            fully refundable. One of our representatives would then get in touch
            with you with more details.
          </p>
          <button>Pre Book</button>
        </div>
      </div>
    </div>
  );
}

export default Design;
