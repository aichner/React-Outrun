// React
import React from "react"
import ReactDOM from "react-dom"

// App
import App from "./App"

// RSW
import registerServiceWorker from './registerServiceWorker';

// Render the dom
ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
