import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Contact = props => {
     return (
          <div className="contact-page ">
               <div className="container m-auto p-3">
                    <h3 className="primary text-center py-4">Contact Us </h3>
                    <Form>
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
                                   id="statecode"
                                   placeholder="your state code"
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="exampleText" className="primary">
                                   Message
                              </Label>
                              <Input
                                   type="textarea"
                                   name="text"
                                   id="exampleText"
                                   placeholder="type your message here ......."
                              />
                         </FormGroup>
                         <Button className="bg-primary text-white btn py-2 px-5">
                              Submit
                         </Button>
                    </Form>
               </div>
          </div>
     );
};

export default Contact;
