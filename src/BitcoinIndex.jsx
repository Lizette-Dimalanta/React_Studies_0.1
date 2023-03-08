import { useState, useEffect } from 'react'

const BitcoinIndex = () => {
let [price, setPrice] = useState(0)

  useEffect(() => console.log('useEffect triggered'))

  fetch ('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
    .then(response => response.json()) // Returns a promise (JSX)
    .then(data => setPrice(data.bpi.AUD.rate_float)) // Check if correct data is retrieved

  return (
    <>
        <h1>Bitcoin Index</h1>
        {price > 0 ? <h3>Current Price: AUD {price}</h3> : <h3>Loading...</h3>}
    </>
  )
}

export default BitcoinIndex