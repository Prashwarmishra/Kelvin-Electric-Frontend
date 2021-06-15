import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Hero } from './';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <Hero />
      </div>
    );
  }
}

export default connect()(Home);
