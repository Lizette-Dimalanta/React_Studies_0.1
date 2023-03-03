import React, { useState } from 'react'

const App = () => {
  let count = useState(5)

  function updateCount() {
    count++
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
