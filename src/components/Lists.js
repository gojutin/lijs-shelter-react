import React, { Component } from 'react';
import List from './List';
import { Col } from 'react-bootstrap';

const fbMockPuppies = [
    {id: 0, name: "buster", image: "www.image.com"},
    {id: 1, name: "canoli", image: "www.image.com"},
    {id: 2, name: "thomas", image: "www.image.com"},
    {id: 3, name: "robert", image: "www.image.com"},
    {id: 4, name: "killer", image: "www.image.com"},
];

const fbMockKittens = [
    {id: 0, name: "frisky", image: "www.image.com"},
    {id: 1, name: "terrence", image: "www.image.com"},
    {id: 2, name: "mini", image: "www.image.com"},
    {id: 3, name: "kay", image: "www.image.com"},
    {id: 4, name: "mr bigglesworth", image: "www.image.com"},
];

class Lists extends Component {
  render() {
    return (
      <div className="Lists">
        <Col xs={6} md={6}>
          <List listName={"Puppies"} listData={fbMockPuppies} />
        </Col>

        <Col xs={6} md={6}>
          <List listName={"Kittens"} listData={fbMockKittens} />
        </Col>
      </div>
    );
  }
}

export default Lists;