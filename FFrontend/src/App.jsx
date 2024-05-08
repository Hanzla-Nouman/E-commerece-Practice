import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UpdateProfile from "./components/UpdateProfile";
import UpdatePassword from "./components/UpdatePassword";
import ForgetPassword from "./components/ForgetPassword";
import Cart from "./components/Cart";
import ResetPassword from "./components/ResetPassword";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { InputStateProvider } from "./context/inputContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { useSelector,useDispatch } from "react-redux";
import store from "./store";
import ProtectedRoute from "./components/ProtectedRoute";
import { loadUser, logout } from "./store/userActions";
import Shipping from "./components/Shipping";
import ConfirmOrder from "./components/ConfirmOrder";
import Payment from "./components/Payment";
import axios from "axios";
import { Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import OrderSuccess from "./components/OrderSuccess";
function App() {
  const [stripeApiKey, setStripeApiKey] = React.useState(null);
  
  useEffect(() => {
    store.dispatch(loadUser());
    fetchStripeApiKey();
  }, []);


  async function fetchStripeApiKey() {
    try {
      const {data} = await axios.get("http://localhost:4000/api/v1/stripeapikey");
      console.log(data.stripeApiKey)
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("here is an error",error);
    }
  }
  if (stripeApiKey === null) {
    // If stripeApiKey is not yet available, return null or a loading indicator
    return null;
  }
  const stripePromise= loadStripe(stripeApiKey)



  return (
    <div>
      <React.StrictMode>
      <InputStateProvider>
      <Navbar />
     <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/me/update/" element={<UpdateProfile />} />
        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/password/forgot" element={<ForgetPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
       <Route path="/process/payment" element={<Payment />} />
       <Route path="/success" element={<OrderSuccess />} />
        
      </Routes>
        </Elements>
      <Footer />
      </InputStateProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
