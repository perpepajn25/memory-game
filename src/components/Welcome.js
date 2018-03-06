import React from 'react'

class Welcome extends React.Component{
  render(){
    console.log(this.props.match)
    return (
        <div>
          Welcome
        </div>
      )
    }
}

export default Welcome
