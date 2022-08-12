import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    if (searchFieldString != searchField) {
      setSearchField(searchFieldString);
    }
  }

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }));
  },
  [searchField]);
  

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className="monsters-search-box" placeholder="Search Monsters" onChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
