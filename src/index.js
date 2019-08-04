//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// This serves as an entry point to the DOM and server renderers for React
import ReactDOM from 'react-dom';

//> Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//> Components
// Root component
import App from "./App"

//> CSS
// Root SCSS file
import './index.scss'

// Register Service Worker
import registerServiceWorker from './registerServiceWorker';

// Render the dom
ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
