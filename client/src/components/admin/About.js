import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const About = () => {
     return (
          <div className="my-5">
               <h3 className="primary">About</h3>
               <Form>
                    <FormGroup>
                         <Label for="exampleText" className="primary">
                              About Message
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
     );
};

export default About;
