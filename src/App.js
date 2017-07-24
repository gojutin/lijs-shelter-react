import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Lists from './components/Lists';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Lists />
      </div>
    );
  }
}

export default App;