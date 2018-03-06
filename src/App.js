import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Deck from './components/Game'
import easyDeck from './easy_deck.js'
import mediumDeck from './medium_deck.js'
import hardDeck from './hard_deck.js'
import Welcome from './components/Welcome'

class App extends Component {

  state = {
    easyDeck: [],
    mediumDeck: [],
    hardDeck: []
  }

  componentDidMount(){
    this.setState({
       easyDeck: this.shuffle(easyDeck),
       mediumDeck: this.shuffle(mediumDeck),
       hardDeck: this.shuffle(hardDeck)
    })
  }

  shuffle = (array) => {
    const newArray = array
    var j, x, i;
    for (i = newArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = x;
    }
    return newArray
  }

  render() {
    return (
      <div>
        <Link to={"/welcome"}> Home </Link>
        <Link to={"/easy"}> Easy </Link>
        <Link to={"/medium"}> Medium </Link>
        <Link to={"/hard"}> Hard </Link>
        <Route exact path = '/welcome' component={Welcome}/>
        <Route exact path = '/easy' render= {()=> <Deck deck= {this.state.easyDeck} />} />
        <Route exact path = '/medium' render= {()=> <Deck deck= {this.state.mediumDeck} />} />
        <Route exact path = '/hard' render= {()=> <Deck deck= {this.state.hardDeck} />} />
      </div>
    );
  }
}

export default App;
