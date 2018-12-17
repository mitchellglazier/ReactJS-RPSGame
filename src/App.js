import React, { Component } from 'react';
import './App.css';
import RpsForm from './rpsForm.js';

class App extends Component {

  computerChoice = () => {
    let randomNumber = Math.floor((Math.random()) * 3);
        if (randomNumber === 1) {
          return 'Rock'
        } else if (randomNumber === 2) {
          return 'Paper'
        } else
          return 'Scissors'
        }


  render() {
    return (
      <div>
        <RpsForm compareToComp={this.compareToComp} />
        <h2>{this.compareToComp()}</h2>
      </div>
    );
  }
}

export default App;
