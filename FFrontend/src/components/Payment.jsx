import React from 'react'
import Steppers from './Steppers'
import List from './List'
import {CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements} from "@stripe/react-stripe-js"

const Payment = () => {
  return (
    <div>
        <Steppers step={2}/>
        <div className="paymentContainer">
        <form className="paymentForm">
        <CardNumberElement className='paymentInput'/>
        <CardExpiryElement className='paymentInput'/>
        <CardCvcElement className='paymentInput'/>
        <input
            type="submit"
            value={`Pay - ₹${98}`}
            // ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
        </div>
    </div>
  )
}

export default Payment

