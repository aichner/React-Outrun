//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Boostrap
import { 
  Container
} from 'react-bootstrap';

//> Components
// Atoms
import {
  Alert
} from '../../atoms';

class Intro extends React.Component {
  render() {
    return (
      <Container>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'space',
          'hot',
          'sun',
          'deep',
          'crazy',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </Container>
    );
  }
}

export default Intro;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
