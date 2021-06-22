import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Preorder, Footer } from '.';
import { fetchPreorders } from '../actions/preorders';
import '../assets/css/user_account.css';

class UserAccount extends Component {
  componentDidMount() {
    const userId = this.props.auth.user._id;
    this.props.dispatch(fetchPreorders(userId));
  }

  render() {
    const { preorderList } = this.props.preorders;
    return (
      <div>
        <div className="wrapper">
          <div className="account-card">
            <div className="account-heading">
              <h1>Your Bookings</h1>
            </div>
            <div className="account-container">
              {preorderList.map((preorder) => (
                <Preorder preorder={preorder} key={preorder._id} />
              ))}
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
    auth: state.auth,
    preorders: state.preorders,
  };
}

export default connect(mapStateToProps)(UserAccount);
