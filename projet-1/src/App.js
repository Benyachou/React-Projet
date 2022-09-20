import React, { Component } from 'react';
import Mycars from './components/Mycars';
import Couleur from './components/Couleur';
import Marque from './components/Marque';
import './App.css';

class App extends Component {

  render() {
    
      return (
      <div className="App">
      <Mycars/>
      <Marque/>
      <Couleur/>
      </div>
      );
  }
}

export default App;
