import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ApiFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

const { Header } = Layout;

class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(userLogout());
  };

  render() {
    const { isLoggedin } = this.props.auth;

    return (
      <Header>
        <div className="website-logo">
          <h3>
            <Link to="/" style={{ color: 'white' }}>
              <ApiFilled
                style={{ color: 'white', fontSize: '1.4rem', marginRight: 5 }}
              />
              Kelvin Electric
            </Link>
          </h3>
        </div>
        {/* <div className="logo" /> */}
        {/* defaultSelectedKeys={['4']} */}
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/locate">Locate</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/test-ride">Test-ride</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/prebook">Book Now</Link>
          </Menu.Item>
          <Menu.Item key="4">
            {isLoggedin ? (
              <Link to="/account">My Account</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </Menu.Item>
          <Menu.Item key="5">
            {isLoggedin ? (
              <div onClick={this.handleLogout}>Sign Out</div>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Navbar);
