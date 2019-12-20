import React from "react";
import { Route, Redirect } from "react-router-dom";
//import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => {
        const storage = JSON.parse(localStorage.getItem("user"));
        console.log(rest.role);
        if (storage && storage.userRoles[0] === rest.role) {
          return <Component {...props} />;
        } else {
          console.log("there");
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
