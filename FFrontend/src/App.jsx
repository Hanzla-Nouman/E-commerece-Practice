import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { InputStateProvider } from "./context/inputContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { useSelector,useDispatch } from "react-redux";
import store from "./store";
import { loadUser, logout } from "./store/userActions";
function App() {
  
  const {user} = useSelector(state => state.userReducer)
  // console.log(user)
useEffect(() => {
    store.dispatch(loadUser())
}, [])




  return (
    <div>
      <InputStateProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
      </InputStateProvider>
    </div>
  );
}

export default App;
