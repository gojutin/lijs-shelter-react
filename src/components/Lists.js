import React, { Component } from 'react';
import List from './List';
import { Col } from 'react-bootstrap';

class Lists extends Component {
  render() {
    return (
      <div className="Lists">
        <Col xsHidden md={2} />

        <Col xs={6} md={3}>
          <h1>Puppies</h1>
          <List />
        </Col>

        <Col xsHidden md={2} />
        
        <Col xs={6} md={3}>
          <h1>Kittens</h1>
          <List />
        </Col>

        <Col xsHidden md={2} />
      </div>
    );
  }
}

export default Lists;