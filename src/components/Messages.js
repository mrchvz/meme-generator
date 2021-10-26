import React from 'react'
import './App.css'

class Messages extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click.",
        "Drink coffee"
      ]
    }
  }


  render() {
    return(
      <div>
        {
          this.state.unreadMessages.length > 0 &&
          <h2> You have {this.state.unreadMessages.length} unread messages!</h2>
        }

      </div>
    )
  }
}

export default Messages
