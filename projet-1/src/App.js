import React, { Component } from 'react';
import Container from './components/Mycars';

import './App.css';

class App extends Component {

  state = {
    titre: 'Catalogue des voitures',
    color: 'green'
  }

  render() {
      return (

      <div className="App">

      <Container 
        color= {this.state.color}
        title = {this.state.titre}
      />

      <button>Changer le nom en dur</button>
      </div>
    );
  }
}

export default App;
