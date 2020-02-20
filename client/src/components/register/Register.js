import React, { useState } from "react";
// import { EventContext } from "../../shared/contextapi/EventProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Register = props => {
     const [error, setError] = useState();
     const [notify, setNotify] = useState();
     const [loading, setLoading] = useState();

     const registerUser = async event => {
          event.preventDefault();
          const { code, password, confirmPassword } = event.target.elements;
          try {
               setLoading(true);
               let res = await axios.post("/api/user/registration", {
                    stateCode: code.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
               });
               console.log(res);
               setNotify("Registration successful");
               setLoading(false);
          } catch (e) {
               setError(e.response.data);
               setLoading(false);
          }
     };

     return (
          <div className="">
               <div className="form-image ">
                    <h2 className="text-white text-center py-4">SIGN UP</h2>
                    <div className="form-container mb-5">
                         <div className="form-wrapper mx-4">
                              {notify ? (
                                   <span className="alert-success">
                                        {notify}
                                   </span>
                              ) : (
                                   <span className="alert-danger error">
                                        {error}
                                   </span>
                              )}

                              <Form onSubmit={registerUser}>
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
                                             name="code"
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
                                        <Label
                                             htmlFor="name"
                                             className="text-primary"
                                        >
                                             Confirm Password<span>*</span>
                                        </Label>
                                        <Input
                                             type="password"
                                             placeholder="password"
                                             name="confirmPassword"
                                        />
                                   </FormGroup>
                                   <FormGroup>
                                        <Button
                                             className=" mt-2 btn bg-primary text-white px-3 btn-block"
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
                                                  "Register"
                                             )}
                                        </Button>
                                        <span> Have an account already ?</span>{" "}
                                        <Link
                                             to="/login"
                                             className="text-primary"
                                        >
                                             {" "}
                                             Login here
                                        </Link>
                                   </FormGroup>
                              </Form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
