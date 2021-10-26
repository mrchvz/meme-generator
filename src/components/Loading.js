import React from 'react'
import './App.css'
import Conditional from './components/Conditional'

class Loading extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return(
      <div>
        {this.state.isLoading ? <h2>Loading...</h2> : <Conditional />}
      </div>
    )
  }
}

export default Loading
