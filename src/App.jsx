import React, { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0) // `useState` set initial value

  function updateCount() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h1>State</h1>
      <p>You have clicked {count} times!</p>
      <button onClick={updateCount}>Click Me!</button>
    </>
  )
}

export default App
