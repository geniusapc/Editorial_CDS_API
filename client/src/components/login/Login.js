import React, { useState } from "react";
import axios from "axios";
// import Cookie from "js-cookie";

// NOTE:
// 1. FOR THE LOGIN, USE THE DEFAULT adminPassword AND adminStateCode FROM THE config.js
// 2. When the login button is clicked  a 'res.headers["x-auth-token"]' response containing a token will be sent to you,
//   store the token in a cookie;
// 3. TO store in a cookie check js-cookie

const Login = props => {
     const [token, setToken] = useState();
     const [error, setError] = useState();

     const loginHandler = async e => {
          e.preventDefault();
          try {
               let res = await axios.post("/api/user/login", {
                    stateCode: e.target.stateCode.value,
                    password: e.target.password.value
               });
               setToken(res.headers["x-auth-token"]);
               console.log(res.headers["x-auth-token"]);
          } catch (e) {
               // set ur error flash message here
               if (e.response.status === 500) console.log(e);
               else setError(e.response.data);
               console.log(e.response.data);
          }
     };

     return (
          <div className=" form-top mb-5">
               <h2 className="primary text-center mt-5">Login</h2>
               <div className="form-container ">
                    <div className="form-wrapper">
                         <form className="mt-5" onSubmit={loginHandler}>
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
                                   <input
                                        type="submit"
                                        value="Login "
                                        className=" my-3 btn-primary btn px-4"
                                   />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;
