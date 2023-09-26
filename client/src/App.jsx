import { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './App.css'
import CheckoutForm from './CheckoutForm'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [clientSecret, setClientSecret] = useState("")

  const stripePromise = loadStripe('pk_test_51NuOQmC0RAqcCFTGNk6L6gWZoOhKCLA5VFZ7imbVcrlDylknNmNi9vPrYwnkiU82wcShq7prCJl8Ww9xlBACYFdT005fyHqdyH')

  const getIndex = async () => {
    const res = await fetch('/api')
    const mess = await res.json()
    console.log("🚀 ~ file: App.jsx:14 ~ getIndex ~ mess:", mess)
    setMessage(mess.message)
  }

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
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </>
  )
}

export default App
