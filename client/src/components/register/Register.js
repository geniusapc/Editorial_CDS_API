import React, { useState } from "react";
// import { EventContext } from "../../shared/contextapi/EventProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { store } from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";
// import "animate.css";
import axios from "axios";
// import { not } from "joi";

const Register = props => {
     const [error, setError] = useState();
     const [notify, setNotify] = useState();
     const [loading, setLoading] = useState();
     // const [notificationAlert] = useContext(EventContext);

     // const cleanUp = (message, type) => {
     //      const notificationAlert = (message, type) => {
     //           store.addNotification({
     //                title: "Alert",
     //                message: `${message}`,
     //                type: `${type}`, // 'default', 'success', 'info', 'warning'
     //                container: "top-center", // where to position the notifications
     //                animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
     //                animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
     //                dismiss: {
     //                     duration: 1000
     //                }
     //           });
     //      };
     //      setTimeout(() => {
     //           notificationAlert(message, type);
     //      }, 2000);
     // };

     const jj = async event => {
          event.preventDefault();
          try {
               let res = await axios.post("/api/user/registration", {
                    stateCode: "0Y/19A/0131",
                    password: "cmcwebcode7",
                    confirmPassword: "cmcwebcode7"
               });
          } catch (e) {
               console.log(e.response);
          }
     };
     //  notificationAlert(error, "danger");

     return (
          <div className=" form-top mb-5">
               <h2 className="primary text-center mt-5">Signup</h2>
               <div className="form-container ">
                    <div className="form-wrapper">
                         {notify && <p>{notify}</p>}
                         <form className="mt-5" onSubmit={jj}>
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
