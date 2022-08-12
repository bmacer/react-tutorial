import { Component } from 'react';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  //// Concept: LOCAL STATE and setState
  // Best practice, use the same object structure when updating
  constructor() {
    super();
    this.state = {
      monsters: [],
      query: "",
    }
    console.log("constructor() complete running...");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState(() => {
        return {monsters: users};
      }, () => {
        console.log(this.state);
      }
    ));
    console.log("componentDidMount() completed running...")
  }

  render() {
    console.log("render() running...");
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.query);
    });
    
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search Monsters" onChange={(event) => {
          this.setState(() => {
            return { query: event.target.value.toLocaleLowerCase() }
          });
        }}></input>
        {filteredMonsters.map((monster) => {
          return <div key="{monster.id}"><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
