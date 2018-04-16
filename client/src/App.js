import React, {Component} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Character from "./components/Characters";
import Scores from "./components/Scores";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: 'Click your favorite character to start.',
    marvels: [
      {
        id: 1,
        name: "Amazing Spider-man",
        selected: false
      }, {
        id: 2,
        name: "Apocalypse",
        selected: false
      }, {
        id: 3,
        name: "Augustus Roman",
        selected: false
      }, {
        id: 4,
        name: "Black Panther",
        selected: false
      }, {
        id: 5,
        name: "Captain Marvel",
        selected: false
      }, {
        id: 6,
        name: "Cyclops",
        selected: false
      }, {
        id: 7,
        name: "Madelyne Pryor",
        selected: false
      }, {
        id: 8,
        name: "Mary Jane Watson",
        selected: false
      }, {
        id: 9,
        name: "Nova",
        selected: false
      }, {
        id: 9,
        name: "Reed Richards",
        selected: false
      }, {
        id: 10,
        name: "Runaways",
        selected: false
      }, {
        id: 11,
        name: "She-Hulk",
        selected: false
      }, {
        id: 12,
        name: "Star-Lord",
        selected: false
      }, {
        id: 13,
        name: "Thanos",
        selected: false
      }, {
        id: 14,
        name: "Thanos",
        selected: false
      }, {
        id: 15,
        name: "Wolverine",
        selected: false
      }
    ]
  };

  counterCheck=(name,selectedState) => {
    let marvelArray = this.state.marvels;
    marvelArray.sort(function(a, b) {
      return 0.5 - Math.random()
    });

    if (selectedState) {
      marvelArray.forEach(marvel => marvel.selected = false);
      this.setState({marvel: marvelArray, currentScore: 0})
    } else {
      marvelArray.forEach((marvel) => {
        if (marvel.name === name && marvel.selected === false) {
          marvel.selected = true;
          this.setState({
            marvels: marvelArray,
            currentScore: this.state.currentScore + 1
          })
        }
      });
    }
  };

  render() {
    return (<div className="App">
      <Header/>
      <Score>
        message={this.state.message}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}

      </Score>
      <div className="container">
        <div className="row"
        {
          this.state.marvels.map((marvel)
             => <Characters id={marvel.id} character={marvel.name}/>
           )
         }
        />
      </div>
      <Footer/>
    </div>);
  }
}

export default App;
