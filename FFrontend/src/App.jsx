import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UpdateProfile from "./components/UpdateProfile";
import UpdatePassword from "./components/UpdatePassword";
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
      </Routes>
      <Footer />
      </InputStateProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
