import React from 'react'
import './App.css'

class Percy extends React.Component {
  constructor() {
      super()
      this.state = {
        name: "Percy",
        age:  3
      }
  }

  render() {
    return(
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.age} years old</p>
      </div>
    )
  }
}
export default Percy;
