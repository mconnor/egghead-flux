import React, { Component } from 'react';
import AppActions from '../actions/app-actions'

class App extends Component {
  render() {
    return (
      <h2 onClick={AppActions.addItem.bind(null, 'this is the item')}>Welcome to flux react app</h2>
    );
  }
}

export default App;
