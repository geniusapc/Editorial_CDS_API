import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const Gallery = () => {
     const [gallery, setGallery] = useState();
     const UploadGallery = async e => {
          e.preventDefault();
          const { text, file } = e.target.elements;
          try {
               const res = await axios.post(`/api/gallery`, {
                    headers: {
                         "x-auth-token": "testing"
                    },
                    body: {
                         imageFile: file.value,
                         text: text.value
                    }
               });
               console.log(res);
               setGallery(res)
          } catch (error) {
               console.log(error.data);
          }
     };
     return (
          <div className="my-5">
               <h3 className="primary">Gallery</h3>
               <Form onSubmit={UploadGallery}>
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
                         <Input type="text" name="text" />
                    </FormGroup>
                    <Button
                         type="submit"
                         className="bg-primary text-white btn py-2 px-5 mr-2"
                    >
                         Submit
                    </Button>
                    {/*<Button
                         type="delete"
                         className="bg-danger text-white btn py-2 px-5 mr-2"
                    >
                         Delete
                    </Button>*/}
               </Form>
          </div>
     );
};

export default Gallery;
