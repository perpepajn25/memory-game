import React from 'react'
import "../App.css"

class Card extends React.Component {

  flipCard = () => {
    this.props.addFaceUpCards(this.props.code)
  }

  render(){
    return(
        this.props.solved ? <div className="item"><img src="https://static.wixstatic.com/media/958d1f_17dc5aef6615420c84a29b4698bdd19b~mv2.jpg"/></div> :
        (!this.props.faceUp ? (<div className="item"><img onClick={this.flipCard} src="http://www.magicnevin.com/prodimages/backs61949blue_medium.jpg"/></div>) : (<div className="item"><img src={this.props.image}/></div>))
        
    )
  }
}

export default Card
