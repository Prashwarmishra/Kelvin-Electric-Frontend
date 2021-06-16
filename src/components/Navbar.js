import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ApiFilled } from '@ant-design/icons';

const { Header } = Layout;

export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <div className="website-logo">
          <h3>
            <ApiFilled
              style={{ color: 'white', fontSize: '1.4rem', marginRight: 5 }}
            />
            Kelvin Electric
          </h3>
        </div>
        {/* <div className="logo" /> */}
        {/* defaultSelectedKeys={['4']} */}
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Locate</Menu.Item>
          <Menu.Item key="2">Test-ride</Menu.Item>
          <Menu.Item key="3">Book Now</Menu.Item>
          <Menu.Item key="4">Login</Menu.Item>
          <Menu.Item key="5">
            <Link to="/signup">Signup</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
