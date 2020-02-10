import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import About from "./About";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Admin = ({ history }) => {
     const [cookies, removeCookie] = useCookies(["auth-token"]);
     return (
          <div className="form-top">
               <div className="container">
                    <h2 className="primary text-center my-4">
                         ADMIN DASHBOARD
                    </h2>
                    <button
                         className="btn-sm btn-primary py-1 px-2"
                         onClick={() => {
                              removeCookie(["auth-token"]);
                              history.push("/login");
                         }}
                    >
                         Logout{" "}
                    </button>
                    <Link to="/all-users">
                         <button className="btn-sm btn-primary mx-5 py-1 px-2">
                              All Users
                         </button>
                    </Link>

                    <div>
                         <About />
                         <Gallery />
                         <Events />
                         <Contact />
                    </div>
               </div>
          </div>
     );
};

export default Admin;
