import React from 'react'
import Steppers from './Steppers'
import {CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements} from "@stripe/react-stripe-js"

const Payment = () => {

  return (
    <div>
        <Steppers step={2}/>
        <CardNumberElement className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 payment-input'/>
        <CardExpiryElement/>
        <CardCvcElement/>
    </div>
  )
}

export default Payment