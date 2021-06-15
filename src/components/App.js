import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { Navbar, Home } from './';
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Content>
          <Home />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
