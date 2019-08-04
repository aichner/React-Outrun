//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { Route, Switch } from 'react-router-dom';

//> Components
/**
 * IntroPage: This will display what React Outrun can do
 */
import {
  IntroPage
} from './components/pages';

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

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
