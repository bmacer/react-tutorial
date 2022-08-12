import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState(() => {
        return {monsters: users};
      }, () => {
        // console.log(this.state);
      }
    ));
  }
  
  handleQueryChange = (event) => {
    this.setState(() => {
      return { query: event.target.value.toLocaleLowerCase() }
    });
  }

  render() {
    console.log("render() running...");

    const { monsters, query } = this.state;
    const { handleQueryChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(query);
    });
    
    return (
      <div className="App">
        <SearchBox placeholder="Search Monsters" onChange={handleQueryChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
