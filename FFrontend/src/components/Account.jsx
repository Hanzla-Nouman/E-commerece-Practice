import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Loader from "./Loader";
import { loadUser, logout } from '../store/userActions';
import {Link} from "react-router-dom"

const Account = () => {

const { user, loading } = useSelector((state) => state.userReducer);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="account-container" style={{ marginBottom:"50px"}}>
          <h1 className="text-3xl font-bold m-2 text-center" style={{ marginBottom:"30px"}}>Profile</h1>
          <div className="card w-96 bg-base-200 shadow-xl profile-card">
  
  <div className="card-body items-center text-center  ">
    <div className="text-left flex flex-row  ">
      
    <div className="flex  flex-col mr-4">
    <h2  style={{ margin:"5px"}} className="card-title">Name </h2>
    <h2  style={{ margin:"5px"}}className="card-title ">Email </h2>
    <h2  style={{ margin:"5px"}}className="card-title ">Joined on </h2>
    </div>
    <div className="flex flex-col text-left ml-2 ">
    <p style={{fontWeight:500, margin:"5px", fontStyle:"italic"}}>{user.name}</p>
    <p style={{fontWeight:500, margin:"5px", fontStyle:"italic"}}>{user.email}</p>
    <p style={{fontWeight:500, margin:"5px", fontStyle:"italic"}}>{String(user.createdAt).substr(0, 10)}</p>
    </div>
    </div>

    <div className="card-actions" style={{ margin:"15px"}}>
      <Link to="/myOrders"><button className="btn btn-primary">My Orders</button></Link>
      <Link to="/password/update"><button className="btn btn-primary">Change Password</button></Link>
    </div>
    <div className="card-actions" style={{ marginBottom:"20px"}}>
      <Link to="/me/update"><button className="btn-lg btn btn-primary">Update Profile</button></Link>
    </div>
  </div>
</div>
        </div>
      )}
    </div>
  );
};

export default Account;
