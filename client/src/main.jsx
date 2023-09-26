import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51NuOQmC0RAqcCFTGNk6L6gWZoOhKCLA5VFZ7imbVcrlDylknNmNi9vPrYwnkiU82wcShq7prCJl8Ww9xlBACYFdT005fyHqdyH')


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App stripePr={stripePromise} />
  </BrowserRouter>
  // </React.StrictMode>,
)
