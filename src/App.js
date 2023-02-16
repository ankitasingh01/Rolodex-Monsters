import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      newTargetState: "",
      // newFilteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return { monsters: data, newFilteredMonsters: data };
        });
      });
  }

  searchChange = (event) => {
    // const filterMonsters = lowerNames.length
    //   ? this.state.monsters.filter((monsterfilter) => {
    //       return monsterfilter.name.toLowerCase().includes(lowerNames);
    //     })
    //   : [...this.state.monsters];
    const newTargetState = event.target.value.toLowerCase();
    this.setState((prevState) => {
      return {
        newTargetState,
      };
    });
  };

  render() {
    const { monsters, newTargetState } = this.state;
    const { searchChange } = this;
    const filterMonsters = monsters.filter((monsterfilter) => {
      return monsterfilter.name.toLowerCase().includes(newTargetState);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          className="monsters-search-box"
          onChangeHandler={searchChange}
        />
        <CardList filterMonsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
