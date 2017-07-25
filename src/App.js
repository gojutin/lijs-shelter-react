import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
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
      <div>
       <Header {...this.state} />
       <List {...this.state} />
      </div>
    );
  }
}

export default App;