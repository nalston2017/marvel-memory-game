import React, {Component} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Scores from "./components/Scores";
import marvels from "./marvels.json"

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: 'Click your favorite character to start.',
    marvels: marvels
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
      <Scores>
        message={this.state.message}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}

      </Scores>
      <div className="container">
        {
          this.state.marvels.map((marvel) => <Characters id={marvel.id} character={marvel.name}/>
           )
         }
        </div>
      <Footer/>
    </div>);
  }
}

export default App;
