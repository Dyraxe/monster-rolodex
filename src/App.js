import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monsters: json }));
  }
  render() {
    return (
      <div className="App">
        <CardList name="Ninners">
          {this.state.monsters.map((m) => (
            <h1 key={m.id}>{m.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
