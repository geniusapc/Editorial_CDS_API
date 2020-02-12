import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

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
                    <Button
                          className="bg-primary mr-2 text-white btn py-2 px-5"
                         onClick={() => {
                              removeCookie(["auth-token"]);
                              history.push("/login");
                         }}
                    >
                         Logout{" "}
                    </Button>
                    <Link to="/all-users">
                         <Button    className="bg-primary text-white mr-2 btn py-2 px-5">
                              All Users
                         </Button>
                    </Link>
                    <Link to="/leaders">
                      <Button
                        
                         className="bg-primary text-white btn py-2 px-5"
                    >
                         Leaders Profile
                    </Button>
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
