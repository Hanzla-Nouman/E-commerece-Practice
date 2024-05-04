import React,{useState} from 'react'
import { Stepper,Step } from 'react-form-stepper';
import Circle from './Circles';
import { Link } from 'react-router-dom';


const Steppers = ({step}) => {
  return (
    <Stepper activeStep={step}>
   <Step label="Shipping Details" />
   <Step label="Confirm Order" />
   <Step label="Payment" />
  </Stepper>
  )
  
}

export default Steppers

