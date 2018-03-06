import React from 'react'
import "../App.css"
import Card from './Card'

class Game extends React.Component {
  state = {
    attempts: 0,
    faceUpCards: [],
    solvedCards: []
  }

  addFaceUpCards = (card_code) => {
    if (this.state.faceUpCards.length < 2) {
      this.setState({
        faceUpCards: [...this.state.faceUpCards, card_code]
      },() => {this.shouldCompare()})
    }
  }

  shouldCompare = () => {
    if (this.state.faceUpCards.length === 2){
      this.compareCards()
    }
  }

  compareCards = () => {
    if (this.state.faceUpCards[0].charAt(0) === this.state.faceUpCards[1].charAt(0)){
      console.log('Match!')
      setTimeout(()=>{this.setState({
        solvedCards: [...this.state.solvedCards, ...this.state.faceUpCards],
        faceUpCards: [],
        attempts: this.state.attempts + 1
      })}, 1000)
    } else {
      console.log('Mismatch')
      setTimeout(()=>{this.setState({
        faceUpCards: [],
        attempts: this.state.attempts + 1
      })}, 2000)
    }
  }

  render(){
    console.log(this.props.match)
    let cards = this.props.deck.map((card) => {
      return (<Card solved={this.state.solvedCards.includes(card.code)} faceUp={this.state.faceUpCards.includes(card.code)} addFaceUpCards={this.addFaceUpCards} key={card.code} {...card}/>)
    })
    return (
      <div>
        <h1> {this.state.attempts} </h1>
        <div className="container">
          <div className="flex-container">
            {cards}
          </div>
        </div>
      </div>
    )
  }
}


export default Game
