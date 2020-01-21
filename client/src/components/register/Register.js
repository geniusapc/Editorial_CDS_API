import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import image from "../../images/slide1.png";
// import axios from "axios";

const Register = props => {
     const [error, setError] = useState();

     const registrationHandler = async e => {
          // e.preventDefault();
          // try {
          //      let res = await axios.post("/api/user/register", {
          //           stateCode: e.target.stateCode.value,
          //           password: e.target.password.value,
          //           confirmPassword: e.target.confirmPassword.value
          //      });
          //      console.log(res.data);
          //      console.log("Registration was successful");
          // } catch (e) {
          //      setError(e.response.data);
          //      console.log(e.response.data);
          // }
     };

     return (
          <div className="container mb-5">
               <div className="form-container ">
                    <div className="form-wrapper">
                         <img src={image} alt="" className="img-rounded" />
                         <form className="mt-5" onSubmit={registrationHandler}>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        State Code <span>*</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="state code"
                                        name="stateCode"
                                   />
                              </div>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        Password<span>*</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                   />
                              </div>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        Confirm Password<span>*</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                   />
                              </div>
                              <div className="form-div">
                                   <input
                                        type="submit"
                                        value="Register "
                                        className=" my-3 btn-primary btn px-4"
                                   />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;
