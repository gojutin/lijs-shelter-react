import React, { Component } from 'react';
import Header from './components/Header';
import Lists from './components/Lists';
import { firebaseAuth } from './auth';

class App extends Component {

  state={
    currentUser: "",
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(currentUser => {
      this.setState({
        currentUser,
      })
    })
  }

  render() {
    return (
      <div className="App">
       <Header {...this.state} />
       <Lists {...this.state} />
      </div>
    );
  }
}

export default App;