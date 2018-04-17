import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Scores from './components/Scores';
import Tile from './components/Tile';
import Footer from './components/Footer';
import marvels from './marvels.json';

class App extends Component {
  // Set the state to start the game
  state = {
    topScore: 0,
    currentScore: 0,
    marvels: marvels,
    unClickedMarvels: marvels,
    message: "Click on your favorite character to get started. Remember who you picked."
  };

  // Shuffle function
  // Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [
        a[i], a[j]
      ] = [
        a[j], a[i]
      ];
    }
  }

  //Onclick logic
  clickTile = id =>{
    console.log(id);
    console.log("test", this.state.unClickedMarvels);
    const matchTile = this.state.unClickedMarvels.find(i => i.id === id);


    if (matchTile === undefined) {
      this.setState({
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        marvels: marvels,
        unClickedMarvels: marvels,
        message: "You have already picked that.Try again."
      })
    } else {
      const updatedMarvels = this.state.unClickedMarvels.filter(i => i.id !== id);
      console.log(updatedMarvels);

      this.setState({
        currentScore: this.state.currentScore + 1,
        marvels: marvels,
        unClickedMarvels: updatedMarvels,
        message: "Excelsior!!"
      })
    }

    this.shuffle(marvels);
  }

  render() {
    return (<div className="App">
      <Header/>
      <Scores message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore}/>
      <div className="container">
        {
          this.state.marvels.map(marvel => (
            <Tile
            key={marvel.id}
            id={marvel.id}
            name={marvel.name}
            image={marvel.image}
            clickTile={this.clickTile}
            currentScore={this.state.currentScore}
            />
          ))
        }
      </div>
      <Footer/>
    </div>
  );
  }
}

export default App;
