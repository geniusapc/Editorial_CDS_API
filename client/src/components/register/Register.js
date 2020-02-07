import React, { useState } from "react";
// import { EventContext } from "../../shared/contextapi/EventProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

const Register = props => {
     const [error, setError] = useState();
     const [notify, setNotify] = useState();
     const [loading, setLoading] = useState();

     const registerUser = async event => {
          event.preventDefault();
          try {
               setLoading(true);
               let res = await axios.post("/api/user/registration", {
                    stateCode: "OY/19A/7000",
                    password: "cmcwebcode40",
                    confirmPassword: "cmcwebcode40"
               });
               console.log(res);
               setNotify(res.data);
               setLoading(false);
          } catch (e) {
               console.log(e.response.data);
               setError(e.response.data);
               setLoading(false);
          }
     };

     return (
          <div className=" form-top mb-5">
               <h2 className="primary text-center mt-5">Signup</h2>
               <div className="form-container ">
                    <div className="form-wrapper">
                         {<p>{notify ? notify : error}</p>}
                         <form className="mt-5" onSubmit={registerUser}>
                              <p className="error-message"></p>
                              <div className="form-div">
                                   <label htmlFor="name">
                                        State Code <span>*</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="state code"
                                        name="statecode"
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
                                        name="confirmpassword"
                                   />
                              </div>
                              <div className="form-div">
                                   <button className="submit-btn" type="submit">
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
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;
