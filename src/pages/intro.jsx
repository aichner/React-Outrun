// React
import React from 'react'

// Boostrap
import { Container } from 'react-bootstrap';

import Alert from '../components/Alert'

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
