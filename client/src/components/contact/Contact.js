import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Contact = props => {
     const [notify, setNotify] = useState();
     const [error, setError] = useState();
     const [loading, setLoading] = useState();
     const messageHandler = async e => {
          e.preventDefault();
          const { name, code, pnumber, email, message } = e.target.elements;
          const userName = name.value;
          const config = { header: { "content-type": "application/json" } };
          try {
               setLoading(true);
               await axios.post(
                    "/api/contact",
                    {
                         name: name.value,
                         stateCode: code.value,
                         pnumber: pnumber.value,
                         email: email.value,
                         message: message.value
                    },
                    config
               );
               name.value = "";
               setNotify(`Thank you ${userName} for messaging the Team`);
               setLoading(false);
          } catch (e) {
               setError(e.response.data);
               setLoading(false);
          }
     };

     return (
          <div className="contact-page ">
               <div className="container m-auto p-3">
                    <h3 className="primary text-center py-4">Contact Us </h3>
                    <Form onSubmit={messageHandler}>
                         <div>
                              {notify ? (
                                   <p className="alert-success">{notify}</p>
                              ) : (
                                   <span className="alert-danger">{error}</span>
                              )}
                         </div>
                         <FormGroup>
                              <Label className="primary" for="name">
                                   Name
                              </Label>
                              <Input
                                   type="text"
                                   name="name"
                                   // id="name"
                                   placeholder="Your name"
                                   // required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="statecode" className="primary">
                                   State Code
                              </Label>
                              <Input
                                   type="text"
                                   name="code"
                                   placeholder="your state code"
                                   // required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="statecode" className="primary">
                                   Phone Number
                              </Label>
                              <Input
                                   type="number"
                                   name="pnumber"
                                   placeholder="your phone number"
                                   // required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="statecode" className="primary">
                                   Email
                              </Label>
                              <Input
                                   type="email"
                                   name="email"
                                   placeholder="your Email"
                                   // required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="exampleText" className="primary">
                                   Message
                              </Label>
                              <Input
                                   type="textarea"
                                   name="message"
                                   placeholder="type your message here ......."
                                   // required
                              />
                         </FormGroup>
                         <button
                              className="btn btn-primary py-3 px-5"
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
                         </button>
                    </Form>
               </div>
          </div>
     );
};

export default Contact;
