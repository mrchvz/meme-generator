import React from 'react'
import TravelFormComponent from './TravelFormComponent'

class TravelFormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender:"",
      destination: "Austria",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({[name]: value})
  }

  render() {
    return(
      <TravelFormComponent
        handleChange={this.handleChange}
        data={this.state}
      />
    )
  }
}

export default TravelFormContainer
