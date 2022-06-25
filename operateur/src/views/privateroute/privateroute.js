import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("access_token");
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          Component ? (
            <Component {...props} />
          ) : (
            rest.render(props)
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
