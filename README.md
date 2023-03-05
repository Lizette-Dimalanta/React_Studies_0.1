# React Studies (Part 2)

## Table of Contents

- [React Studies (Part 2)](#react-studies-part-2)
  - [Table of Contents](#table-of-contents)
  - [State](#state)
  - [Attaching Event Handler to React Component](#attaching-event-handler-to-react-component)
  - [Triggering a Rerender: `Hook` and `useState`](#triggering-a-rerender-hook-and-usestate)
    - [a. Adding `useState`](#a-adding-usestate)
    - [b. Importing `useState`](#b-importing-usestate)
    - [c. Setting `useState`](#c-setting-usestate)
    - [d. Create Setter Function](#d-create-setter-function)
    - [e. **ALTERNATIVE**: Setting Inline Setter Function](#e-alternative-setting-inline-setter-function)
    - [f. **Modularisation**: Updating a global variable](#f-modularisation-updating-a-global-variable)
  - [Updating Components using Third-Party Data](#updating-components-using-third-party-data)
    - [`main.jsx`: Render top-level component](#mainjsx-render-top-level-component)
    - [`BitcoinIndex.jsx`: Set Up Scaffolding](#bitcoinindexjsx-set-up-scaffolding)
    - [Fetch API Data and Update App](#fetch-api-data-and-update-app)

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

### a. Adding `useState`

- Can be any datatype (even an object)
- Call `useState` for any variable you **need** to be "reactive"
- `useState` returns an array

### b. Importing `useState`

  ```jsx
  // { useState } is in brackets as it's not a default export (must be destructured)

  import React, { useState } from 'react'
  ```

### c. Setting `useState`

- Can call `useState` for every variable needed to be "reactive".
- Returns an array

  ```jsx
  const App = () => {   // ↓ useState(set initial value)
    let [count, setCount]  = useState(0)

  // let [current value of state (read only), setter function used to update the state]

  // AKA ["getter", "setter"]
  ```

### d. Create Setter Function

  ```jsx
  function updateCount() {
    setCount(count + 1) // Setter function
    // console.log(count)
  }
  ```

### e. **ALTERNATIVE**: Setting Inline Setter Function

  ```jsx
  <button onClick={() => setCount(count + 1)}>Click Me!</button>
  ```

### f. **Modularisation**: Updating a global variable

- You can incapsulate JS into a component, but not components itself.

  ```jsx
  import React, { useState } from 'react'

  const ShowCount = ({ value=0 }) => {              // 1. Add prop: {value}
    return <p>You have clicked {value} times!</p>   // 3. Rerenders component (reactive update)
  }

  const App = () => {
    let [count, setCount] = useState(0)             // 2. `useState` triggered = updates setCount (+1)

    return (
      <>
        <h1>State</h1>
        <ShowCount value={count}/>                  // 4. Returns `ShowCount`
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        // 2. ↑ EVENT LISTENER: Button clicked, calls setter function (setCount)
      </>
    )
  }

  export default App
  ```

## Updating Components using Third-Party Data

**Example:** Using [CoinDesk API (AUD)](https://api.coindesk.com/v1/bpi/currentprice/AUD.json)

### `main.jsx`: Render top-level component

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import BitcoinIndex from './BitcoinIndex' // Add Component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BitcoinIndex /> // Add Component
  </React.StrictMode>
)
```

### `BitcoinIndex.jsx`: Set Up Scaffolding

```jsx
import React, { useState } from 'react'

const BitcoinIndex = () => {
let [price, setPrice] = useState(0)

  return (
    <>
        <h1>Bitcoin Index</h1>
        <h3>Current Price: AUD {price}</h3>
    </>
  )
}

export default BitcoinIndex
```

### Fetch API Data and Update App