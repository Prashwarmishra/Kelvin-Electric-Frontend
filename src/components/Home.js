import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Hero, Design, Footer } from './';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <Hero />
        <Design />
        <Footer />
      </div>
    );
  }
}

export default connect()(Home);
