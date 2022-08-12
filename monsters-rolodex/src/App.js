import { Component } from 'react';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  //// Concept: LOCAL STATE and setState
  // Best practice, use the same object structure when updating
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "hal", id: 1 },
        { name: "val", id: 2 },
        { name: "mel", id: 3 },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key="{monster.id}"><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
