import React from "react";
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const About = () => {
     const [cookies] = useCookies(["auth-token"]);
     const UpdateAbout = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { message } = e.target.elements;
          try {
               const res = await axios.put("/api/about", {
                    headers: {
                         "x-auth-token": ` "auth-token" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6ZmFsc2UsInN0YXRlQ29kZSI6IlVTRVIiLCJpYXQiOjE1ODA5NDUwMzV9.7KUeG1UieqwqQIZdTnAhswn3VUC3lQqkIFIexWyaXrE`,
                         " Content-Type": " application/json"
                    },
                    data: {
                         about: "testing"
                    }
               });
               console.log(res);
          } catch (error) {
               console.log(error.response);
               // console.log(value);
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
