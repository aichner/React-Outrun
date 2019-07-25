// React
import React from 'react'

// Boostrap
import { Container } from 'react-bootstrap';

import Alert from '../components/Alert'

class Intro extends React.Component {
  render() {
    return (
      <Container>
        <Alert variant="primary">Test</Alert>
      </Container>
    );
  }
}

export default Intro;
