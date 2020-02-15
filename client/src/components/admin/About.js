import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const About = () => {
     const [cookies] = useCookies(["auth-token"]);
     const [text, setText] = useState("");
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");
     const UpdateAbout = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { message } = e.target.elements;

          try {
               const res = await axios.put(
                    "/api/about",
                    {
                         about: message.value
                    },
                    {
                         headers: {
                              "x-auth-token": `${value}`
                         }
                    }
               );
               console.log(res);
               setNotify("about Page Updated");
          } catch (error) {
               console.log(error);
               setError("server error, please refresh");
          }
     };

     useEffect(() => {
          const getAbout = async () => {
               try {
                    const res = await axios.get("/api/about");
                    console.log(res);

                    setText(res.data.about);
               } catch (error) {}
          };
          getAbout();
     }, []);

     return (
          <div className="my-5">
               <h3 className="primary">About</h3>
               <div>
                    {notify ? (
                         <span className="alert-success">{notify}</span>
                    ) : (
                         <span className="alert-danger">{error}</span>
                    )}
               </div>

               <Form onSubmit={UpdateAbout}>
                    <FormGroup>
                         <Label for="exampleText" className="primary">
                              About Message
                         </Label>
                         <Input
                              type="textarea"
                              value={text}
                              onChange={e => setText(e.target.value)}
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
