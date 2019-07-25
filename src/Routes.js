// React
import React from 'react'
// React Router
import { Route, Switch } from "react-router-dom"

// Pages
import IntroPage from './pages/intro.jsx'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
