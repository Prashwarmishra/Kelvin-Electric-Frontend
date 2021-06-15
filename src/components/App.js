import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { Navbar, Home } from './';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </div>
  );
}

export default App;
