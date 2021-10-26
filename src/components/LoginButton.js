import React from 'react'
import './App.css'

class LoginButton extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let status = this.state.isLoggedIn ? "Log out" : "Log In"
    let text = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return(
      <div>
        <h3>Marie you are {text}</h3>
        <button onClick={this.handleClick}>{status}</button>
      </div>
    )
  }
}

export default LoginButton
