import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import {useNavigate} from "react-router"

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
    const navigate = useNavigate()
  const { loading, isAuthenticated, user } = useSelector((state) => state.userReducer);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
             navigate("/login")
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;