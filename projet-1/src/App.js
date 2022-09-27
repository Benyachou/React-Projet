import React, { Component } from 'react';
import Container from './components/Mycars';

import './App.css';

class App extends Component {

  state = {
    titre: 'Catalogue des voitures',
    color: 'green'
  }

  changeTitle = (e) => {
    console.log(e.target);
    this.setState({ titre: 'Nouveau titre' });
  
  }

  changeViaParam= (titre) => {
    this.setState({ titre: titre });
  }

  changeViaBind = (param) => {
    this.setState({ titre: param });
  }

  modifTitre = (e) => {
    this.setState({ titre: e.target.value });
  }

  render() {
      return (

      <div className="App">

      <Container 
        color= {this.state.color}
        title = {this.state.titre}
      />

      <button onClick={this.changeTitle}>Changer le nom en dur</button>
      <button onClick={ () => this.changeViaParam('Titre via un parametre')}>un autre titre</button>
      <button onClick={ this.changeViaBind.bind(this, 'wesh la famille')}>un autre</button>
      <input type="text" onChange= {this.modifTitre} value={this.state.titre} />

      </div>
    );
  }
}

export default App;
