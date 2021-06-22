import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import jwtDecode from 'jwt-decode';

import 'antd/dist/antd.css';
import {
  Navbar,
  Home,
  Signup,
  Login,
  ForgetPassword,
  ResetPassword,
  Dealerships,
  TestRide,
  Prebook,
  SuccessPage,
  UserAccount,
} from './';

import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { authenticateUser } from '../actions/auth';
import Page404 from './Page404';
const { Content } = Layout;

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

class App extends Component {
  componentDidMount() {
    console.log('INSIDE CDM OF APP');
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser(user));
    }
  }
  render() {
    console.log('INSIDE APP RENDER');

    const { isLoggedin } = this.props.auth;
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navbar />
            <Content>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/locate" component={Dealerships}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route
                  path="/forget-password"
                  component={ForgetPassword}
                ></Route>
                <Route
                  path="/reset-password/:userId"
                  component={ResetPassword}
                ></Route>
                <Route path="/test-ride" component={TestRide}></Route>
                <Route path="/prebook" component={Prebook}></Route>
                <PrivateRoute
                  path="/success"
                  component={SuccessPage}
                  isLoggedin={isLoggedin}
                ></PrivateRoute>
                <PrivateRoute
                  path="/account"
                  component={UserAccount}
                  isLoggedin={isLoggedin}
                ></PrivateRoute>
                <Route component={Page404}></Route>
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(App);
