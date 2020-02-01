import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Events = () => {
     return (
          <div className="my-5">
               <h3 className="primary">Events</h3>
               <Form>
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
                         <Input type="file" name="file" />
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
