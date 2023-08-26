import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <h1>List my car</h1>
        <Mycars title={this.state.titre} />
      </div>
    )
  }
}

export default App;
