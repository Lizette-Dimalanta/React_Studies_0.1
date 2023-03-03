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

### Adding `useState`:

```jsx
// Add { useState }
import React, { useState } from 'react'

const App = () => {
  let count = useState()

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
// OUTPUT = Array [ undefined (current value of state),dispatchSetState() (function used to update the state) ]
```