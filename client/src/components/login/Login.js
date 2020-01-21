import React, { useState } from "react";
import image from "../../images/slide1.png";

// import axios from "axios";
// import Cookie from "js-cookie";

const Login = props => {
     const [token, setToken] = useState();
     const [error, setError] = useState();

     const loginHandler = async e => {
          //   e.preventDefault();
          //   try {
          //        let res = await axios.post("/api/user/login", {
          //             stateCode: e.target.stateCode.value,
          //             password: e.target.password.value
          //        });
          //        setToken(res.headers[("token", "x-auth-token")]);
          //   } catch (e) {
          //        if (e.response.status === 500) console.log(e);
          //        else setError(e.response.data);
          //   }
     };

     return (
          <div className="container mb-5">
               <div className="form-container ">
                    <div className="form-wrapper">
                         <img src={image} alt="" className="img-rounded" />
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
