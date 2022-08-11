import { Component } from 'react';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  //// Concept: LOCAL STATE and setState
  // Best practice, use the same object structure when updating
  constructor() {
    super();
    this.state = {
      name: {first: "brandon", last: "macer"},
      company: "macer franks enterprises",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.first}</p>
          <p>I work at {this.state.company}</p>
          <button onClick={() => {
            const name = this.state.name.first == "brandon" ? "tashia" : "brandon";
            this.setState({name: {first: name, last: "macer"}})
            console.log(this.state);
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
