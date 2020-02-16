import React from "react";
import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
     const [cookies] = useCookies(["auth-token"]);
     // const [user] = React.useState("");
     const value = cookies["auth-token"];
     // setCookie, removeCookie
     return (
          <Route
               {...rest}
               render={props =>
                    value ? (
                         <Component {...props} />
                    ) : (
                         <Redirect to={"/login"} />
                    )
               }
          />
     );
};

export default PrivateRoute;
