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
function App() {
  
  
  useEffect(() => {

    store.dispatch(loadUser())
  
}, [])




  return (
    <div>
      <React.StrictMode>
      <InputStateProvider>
      <Navbar />
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
      </Routes>
      <Footer />
      </InputStateProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
