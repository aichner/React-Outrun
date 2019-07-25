// React
import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// Components
//import Nav from './components/waves/molecules/Nav';
//import Footer from './components/waves/molecules/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;