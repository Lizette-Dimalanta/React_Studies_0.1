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