import React from 'react'

function Joke(props) {
  return(
    <div className='joke'>
      <h4 style={{display: !props.question && "none"}}>Question: {props.question} </h4>
      <p>{props.punchline}</p>
    </div>
  )
}

export default Joke;
