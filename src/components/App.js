import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import jwtDecode from 'jwt-decode';

import 'antd/dist/antd.css';
import { Navbar, Home, Signup, Login, ForgetPassword } from './';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { authenticateUser } from '../actions/auth';
import Page404 from './Page404';
const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser(user));
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navbar />
            <Content>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route
                  path="/forget-password"
                  component={ForgetPassword}
                ></Route>
                <Route component={Page404}></Route>
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
