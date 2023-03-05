import React, { useState } from 'react'

const ShowCount = ({ value=0 }) => { // 1. Add prop: {value}
  return <p>You have clicked {value} times!</p> // 3. Rerenders component (reactive update)
}

const App = () => {
  let [count, setCount] = useState(0) // 2. `useState` triggered = updates setCount (+1)

  return (
    <>
      <h1>State</h1>
      // ↓ 3. Returns `ShowCount`
      <ShowCount value={count}/>
      // ↓ 2. Event listener: Button clicked, calls setter function (setCount)
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  )
}

export default App
