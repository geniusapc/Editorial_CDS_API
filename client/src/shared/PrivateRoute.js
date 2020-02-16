import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";
import { EventProvider } from "../shared/contextapi/EventProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
     const [user] = useContext(EventProvider);
     //      const [cookies] = useCookies(["auth-token"]);
     // \
     //      const value = cookies["auth-token"];
     //      // setCookie, removeCookie
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
