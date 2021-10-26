import React from 'react'

function TravelFormComponent(props) {
  return(
    <main>
      <form onSubmit={props.handleSubmit}>
        <label>Your Name: </label>
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <label>Age: </label>
        <input
          type="text"
          value={props.data.age}
          name="age"
          placeholder="Your Age"
          onChange={props.handleChange}
        />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        /> Female
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        /> Male
        <br />
        <label>Destination: </label>
        <select
          value={props.data.destination}
          onChange={props.handleChange}
          name="destination">
          <option value="Austria">Austria</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </select>
        <br />
        <label>Dietary Restrictions: </label>
        <br />
        <input
          type="checkbox"
          name="isVegan"
          onChange={props.handleChange}
          checked={props.data.isVegan}
        />Vegan
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={props.data.isKosher}
        />Kosher
        <input
          type="checkbox"
          name="isLactoseFree"
          onChange={props.handleChange}
          checked={props.data.isLactoseFree}
        />Lactose Free
        <br />
        <br />
        <h2>Hello {props.data.firstName}✨ please verify your data:</h2>
        <p>Name: {props.data.firstName} {props.data.lastName}</p>
        <p>Age: {props.data.age}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Destination: {props.data.destination}</p>
        <p>Dietary Restrictions:</p>
        Vegan: {props.data.isVegan ? "Yes" : "No"} |
        Kosher: {props.data.isKosher ? "Yes" : "No"} |
        Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
        <br />
        <br />
        <button>Submit</button>
        <br />
      </form>
    </main>
  )
}


export default TravelFormComponent
