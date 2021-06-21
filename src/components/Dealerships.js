import React, { Component } from 'react';
import { connect } from 'react-redux';
import { locateDealership } from '../actions/dealerships';
import DealershipCard from './DealershipCard';
import '../assets/css/dealership.css';
import { Select } from 'antd';
import { Footer } from '.';

const { Option } = Select;

class Dealerships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDealerships: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(locateDealership());
  }

  handleChange = (city) => {
    // console.log('value---', e.target.value);
    const { dealershipList } = this.props.dealerships;
    const cityDealerships = dealershipList.filter(
      (dealership) => dealership.city === city
    );
    this.setState({
      cityDealerships: cityDealerships,
    });
  };

  render() {
    const { cityDealerships } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="page-heading">
            <h1>Locate Dealerships</h1>
          </div>
          <div className="page-main">
            <div className="page-description">
              <p>We are currently operating in the following cities: </p>
              <Select
                defaultValue="Select Your City"
                onChange={this.handleChange}
                className="city-select"
              >
                <Option value="Mumbai">Mumbai</Option>
                <Option value="Bengaluru">Bengaluru</Option>
                <Option value="Hyderabad">Hyderabad</Option>
              </Select>
            </div>

            <div className="page-parent">
              {cityDealerships.map((dealership) => {
                return (
                  <DealershipCard
                    key={dealership._id}
                    dealership={dealership}
                  ></DealershipCard>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dealerships: state.dealerships,
  };
}

export default connect(mapStateToProps)(Dealerships);
