import React, { useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EventContext } from "../../shared/contextapi/EventProvider";

/*NOTE:
 *1. FOR THE LOGIN, USE THE DEFAULT adminPassword AND adminStateCode FROM THE config.js
 *2. When the login button is clicked  a 'res.headers["x-auth-token"]' response containing a token will be sent to you,
*   store the token in a cookie;
 3. TO store in a cookie check js-cookie*/

const Login = ({ history }) => {
     const [error, setError] = useState();
     const [user, setUser] = useContext(EventContext);
     const [loading, setLoading] = useState();
     const [cookies, setCookie] = useCookies(["auth-token"]);

     const loginHandler = async e => {
          const { stateCode, password } = e.target.elements;
          e.preventDefault();
          setLoading(true);
          try {
               let res = await axios.post("/api/user/login", {
                    stateCode: stateCode.value,
                    password: password.value
               });
               let auth = res.headers["x-auth-token"];
               setCookie("auth-token", auth, {
                    path: "/"
               });
               setUser(true);
               history.push("/admin-dashboard");
               setLoading(false);
          } catch (e) {
               //* set ur error flash message here
               if (e.response.status === 400) {
                    setError(e.response.data);
                    setLoading(false);
               }
               setLoading(false);
          }
     };

     return (
          <div className="">
               <div className="form-image">
                    <h2 className="text-white text-center py-5 ">LOGIN</h2>
                    <div className="form-container my-auto ">
                         <div className="form-wrapper mx-4">
                              <span className="alert-danger">
                                   {error && error}
                              </span>
                              <Form className="mt-5 " onSubmit={loginHandler}>
                                   <FormGroup>
                                        <Label
                                             htmlFor="name"
                                             className="text-primary"
                                        >
                                             State Code{" "}
                                             <span className="text-danger">
                                                  *
                                             </span>
                                        </Label>
                                        <Input
                                             type="text"
                                             placeholder="state code"
                                             name="stateCode"
                                        />
                                   </FormGroup>
                                   <FormGroup>
                                        <Label
                                             htmlFor="name"
                                             className="text-primary"
                                        >
                                             Password
                                             <span className="text-danger">
                                                  *
                                             </span>
                                        </Label>
                                        <Input
                                             type="password"
                                             placeholder="password"
                                             name="password"
                                        />
                                   </FormGroup>
                                   <FormGroup>
                                        <Button
                                             className="mt-2 btn bg-primary text-white px-3 btn-block"
                                             type="submit"
                                        >
                                             {loading ? (
                                                  <FontAwesomeIcon
                                                       style={{
                                                            marginRight: "1rem",
                                                            marginTop: ".4rem"
                                                       }}
                                                       icon="spinner"
                                                       size="1x"
                                                       color="#fffb00f6"
                                                       spin
                                                  />
                                             ) : (
                                                  "Login"
                                             )}
                                        </Button>
                                   </FormGroup>
                                   <span>Don't have an account ?</span>{" "}
                                   <Link to="/signup" className="text-primary">
                                        {" "}
                                        Signup here
                                   </Link>
                              </Form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default withRouter(Login);
