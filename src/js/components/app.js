import React, { Component } from 'react';
import AppActions from '../actions/app-actions'
import Catelog from './app-catalog'

class App extends Component {
  render() {
    return (
      <div className="container">
				<Catelog />
			</div>
    );
  }
}

export default App;
