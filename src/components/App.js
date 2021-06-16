import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { Navbar, Home, Signup } from './';
const { Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Navbar />
          <Content>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
