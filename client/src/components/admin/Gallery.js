import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Gallery = () => {
     return (
          <div className="my-5">
               <h3 className="primary">Gallery</h3>
               <Form>
                    <FormGroup>
                         <Label for="exampleText" className="primary">
                              Gallery File
                         </Label>
                         <Input type="file" name="file" />
                    </FormGroup>
                    <FormGroup>
                         <Label for="text" className="primary">
                              Gallery Name
                         </Label>
                         <Input type="text" name="name" />
                    </FormGroup>
                    <Button
                         type="submit"
                         className="bg-primary text-white btn py-2 px-5"
                    >
                         Submit
                    </Button>
                    <Button
                         type="delete"
                         className="bg-danger text-white btn py-2 px-5 mr-2"
                    >
                         Delete
                    </Button>
               </Form>
          </div>
     );
};

export default Gallery;
