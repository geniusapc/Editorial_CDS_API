import React from "react";
// import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const About = () => {
     // const [cookies] = useCookies(["auth-token"]);
     const UpdateAbout = async e => {
          e.preventDefault();
          // const value = cookies["auth-token"];
          const { message } = e.target.elements;
          // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo
          try {
               console.log("yyyyy");
               const res = await axios.put(
                    "/api/about",
                    {
                         about: message.value
                    },
                    {
                         headers: {
                              "x-auth-token":
                                   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo"
                         }
                    }
               );
               console.log(res);
          } catch (error) {
               console.log(error.response);
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
