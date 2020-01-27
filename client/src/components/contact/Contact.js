import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const Contact = props => {
     const [notify, setNotify] = useState();
     const messageHandler = async e => {
          e.preventDefault();
          // const { name,code,pnumber,email,message } = e.target.elements;
          try {
               let res = await axios.post("/api/user/contact", {
                    name: e.value,
                    code: e.value,
                    pnumber: e.value,
                    email: e.value,
                    message: e.value
               });
               setNotify(res.data);
          } catch (e) {}
     };

     return (
          <div className="contact-page ">
               <div className="container m-auto p-3">
                    <h3 className="primary text-center py-4">Contact Us </h3>
                    <Form onSubmit={messageHandler}>
                         {notify && <span>notify</span>}
                         <FormGroup>
                              <Label className="primary" for="name">
                                   Name
                              </Label>
                              <Input
                                   type="text"
                                   name="name"
                                   id="name"
                                   placeholder="Your name"
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
                              />
                         </FormGroup>
                         <Button
                              type="submit"
                              className="bg-primary text-white btn py-2 px-5"
                         >
                              Submit
                         </Button>
                    </Form>
               </div>
          </div>
     );
};

export default Contact;
