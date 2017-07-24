import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import List from './components/List';

import styled from 'styled-logs';

const log = styled.warn`
  color: ${true && "green"};
  font-size: 25px;
  padding: 5px;
  
`;

const logWithBorder = log.extend`
  border: 2px solid green;
`;

logWithBorder`Hi there!`;

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <List />
      </div>
    );
  }
}

export default App;

const a = (a,b,c) = (c) =>

function()