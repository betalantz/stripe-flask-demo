import { Link, useNavigate } from "react-router-dom";


export default function Cart({quantity, onSelectQuantity, createPaymentIntent}) {

    const navigate = useNavigate()

    function handleChange(e){
        onSelectQuantity(e.target.value)
    }

    function handleSubmit(){
        createPaymentIntent()
        navigate('/checkout')
    }
  return (
    <>
        <div>Cart</div>
        <form onSubmit={handleSubmit}>
            <label>I'd like to buy</label>
            <input type="number" min={1} max={99} value={quantity} onChange={handleChange}/>
            <label>kg of cabbages @ $3.99/kg</label>
            <button type="submit">Checkout</button>
        </form>

    </>
  )
}
