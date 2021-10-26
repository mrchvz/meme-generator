import React, {useState} from "react"

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount + 1)
  }

  return(
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decr}>Decrement
  )
}
