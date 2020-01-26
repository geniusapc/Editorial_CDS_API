import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Register = props => {
     const [error, setError] = useState();
     const [notify, setNotify] = useState();
     const [loading, setLoading] = useState();

     const registrationHandler = async e => {
          e.preventDefault();
          // const { stateCode, password, confirmPassword } = e.target.elements;
          try {
               setLoading(true);
               let res = await axios.post("/api/user/registeration", {
                    stateCode: e.value,
                    password: e.value,
                    confirmPassword: e.value
               });
               setNotify(res.data);
               setLoading(false);
          } catch (e) {
               setError(e.response.data);
          }
     };

     return (
          <div className=" form-top mb-5">
               <h2 className="primary text-center mt-5">Signup</h2>
               <div className="form-container ">
                    <div className="form-wrapper">
                         {notify && <p>{notify}</p>}
                         <form className="mt-5" onSubmit={registrationHandler}>
                              <p className="error-message">{error && error}</p>
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
