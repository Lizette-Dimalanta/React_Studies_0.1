# React Studies (Part 2)

## Table of Contents

## State

`def` - State: The collective term for all of the data that the app is storing/tracking at a given point in time.

- As time passes/events happen, the state will change (over time).
- Must be implemented a certain way for it to be "reactive".

## Attaching Event Handler to React Component

Prop: `onClick?`

- Anything that starts with `on`, is an event handler.
- Any event you can do in vanilla `Javascript`, there should be a matching `on` property (event handler).
- **Best Practice**: Add component **inside** the component

```jsx
import React from 'react'

const App = () => {
  let count = 0

// Create function (inside the component)
  function updateCount() {
    count++
  }

  return (
    <>
      <h1>State</h1>
      <p>You have clicked {count} times!</p>
    // ADD EVENT HANDLER ↓
      <button onClick={updateCount}>Click Me!</button>
    </>
  )
}

export default App
```

If only a single/simple statement is needed:

```jsx
<button onClick={() => console.log('hi')}>Click Me!</button>
```

## Triggering a Rerender: `Hook` and `useState`

- Allows us to "hook into" a certain parts of the react framework and utilise it into the code
  - Hook into the `state` mechanism

### Adding `useState`

- Can be any datatype (even an object)
- Call `useState` for any variable you **need** to be "reactive"
- `useState` returns an array

#### a. Importing `useState`

  ```jsx
  // { useState } is in brackets as it's not a default export (must be destructured)

  import React, { useState } from 'react'
  ```

#### b. Setting `useState`

  ```jsx
  const App = () => {   // ↓ useState(initial value)
    let [count, setCount]  = useState({foo: bar})

  // let [current value of state (read only), setter function used to update the state]
  // AKA ["getter", "setter"]
  ```

#### c. Create Setter Function

  ```jsx
  function updateCount() {
    setCount(count + 1) // Setter function
    // console.log(count)
  }
  ```

#### c. **ALTERNATIVE**: Setting Inline Setter Function

  ```jsx
  <button onClick={() => setCount(count + 1)}>Click Me!</button>
  ```