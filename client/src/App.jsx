import { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
import './App.css'
import CheckoutForm from './CheckoutForm'
import Nav from './Nav'
import Cart from "./Cart";
import PaymentStatus from './PaymentStatus'
import { Routes, Route } from "react-router-dom";

function App({ stripePr }) {
  const [count, setCount] = useState(0)
  const [clientSecret, setClientSecret] = useState("")



  const getClientSecret = async () => {
    const res = await fetch('/api/payment_intent/new')
    const { client_secret: clientSecret } = await res.json()
    setClientSecret(clientSecret)
  } 
  useEffect(() => {

    // getIndex()
    getClientSecret()
  
  }, [])

  const appearance = {
    theme: 'night',
  }

  const options = {
    clientSecret,
    appearance
  }
  
  if (!clientSecret) return <h1>Loading...</h1>

  return (
    <>
      <Nav />
      <Elements stripe={stripePr} options={options}>
        <Routes>
            <Route path="/shop?" element={<Cart />} />
            <Route 
              path="/checkout"
              element={
                  <CheckoutForm secret={clientSecret} />
                } />
            <Route path="/status" element={<PaymentStatus  />} />
        </Routes>
      </Elements>
    </>
  )
}

export default App
