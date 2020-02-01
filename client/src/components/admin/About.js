import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const About = () => {
     const UpdateAbout = async e => {
          e.preventDefault();
          const { message } = e.target.elements;
          try {
               const res = await axios.put(`/api/about`, {
                    headers: {
                         "x-auth-token": "testing"
                    },
                    body: {
                         about: message.value
                    }
               });
               console.log(res);
          } catch (error) {
               console.log(error.data);
          }
     };

     return (
          <div className="my-5">
               <h3 className="primary">About</h3>
               <Form onSubmit={UpdateAbout}>
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
