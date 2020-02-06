import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Events = () => {
     const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const updateEvents = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { title, text, date, imagefile } = e.target.elements;
          try {
               const res = await axios.post("/api/event", {
                    headers: {
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6ZmFsc2UsInN0YXRlQ29kZSI6IlVTRVIiLCJpYXQiOjE1ODA5MzkxNzJ9.Uep8TMtgTtdAjMHaosLtLulTwSs9SltNtaUBduszbgw`
                    },
                    data: {
                         title: title.value,
                         text: text.value,
                         date: date.value,
                         imagefile: imagefile.value
                    }
               });
               console.log(res);
          } catch (error) {
               console.log(error.data);
          }
     };

     return (
          <div className="my-5">
               <h3 className="primary">Events</h3>
               <button
                    onClick={() => {
                         const value = cookies["auth-token"];
                         return console.log(String(value));
                    }}
               >
                    get Cookies
               </button>
               <Form onSubmit={updateEvents}>
                    <FormGroup>
                         <Label for="title" className="primary">
                              Title
                         </Label>
                         <Input
                              type="text"
                              name="title"
                              placeholder="type event title..."
                         />
                    </FormGroup>
                    <FormGroup>
                         <Label for="message" className="primary">
                              Text
                         </Label>
                         <Input
                              type="textarea"
                              name="text"
                              placeholder="type events message here ......."
                         />
                    </FormGroup>
                    <FormGroup>
                         <Label for="date" className="primary">
                              Date
                         </Label>
                         <Input type="date" name="date" />
                    </FormGroup>
                    <FormGroup>
                         <Label for="file" className="primary">
                              file
                         </Label>
                         <Input type="file" name="imagefile" />
                    </FormGroup>
                    <Button
                         type="submit"
                         className="bg-primary text-white btn py-2 px-5 mr-2"
                    >
                         Submit
                    </Button>
                    <Button className="bg-primary text-white btn py-2 px-5 mr-2">
                         Edit
                    </Button>
                    {/*}Button className="bg-danger text-white btn py-2 px-5 mr-2">
                         Delete
     </Button>*/}
               </Form>
          </div>
     );
};

export default Events;
