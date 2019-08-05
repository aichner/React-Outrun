//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

//> Components
//import Nav from './components/waves/molecules/Nav';
//import Footer from './components/waves/molecules/Footer';

class App extends React.Component {
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

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
