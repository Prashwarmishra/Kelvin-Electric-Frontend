import React from 'react';
import '../assets/css/design.css';
import design_1 from '../assets/images/design_1.jpg';
import design_2 from '../assets/images/design_2.jpg';
import design_3 from '../assets/images/design_3.jpg';
import design_4 from '../assets/images/design_4.jpg';

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
            ready to go! For a full-charging process this only takes an
            impressive four hours – allowing you more time to drive!
          </p>
        </div>
        <div className="design-img">
          <img src={design_4} alt="kelvin_img" />
        </div>
      </div>
    </div>
  );
}

export default Design;
