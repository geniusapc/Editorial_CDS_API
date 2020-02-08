import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import formData from "form-data";

const Gallery = () => {
     const [image, setImage] = useState({ preview: "", raw: "" });
     const [displayGallery, setDisplayGallery] = useState([]);
     const [notify, setNotify] = useState([]);
     const [error, setError] = useState("");

     const handleChange = e => {
          setImage({
               preview: URL.createObjectURL(e.target.files[0]),
               raw: e.target.files[0]
          });
     };
     const UploadGallery = async e => {
          e.preventDefault();
          // const value = cookies["auth-token"];
          const { text } = e.target.elements;
          const titleData = text.value;

          const data = new formData();
          data.append("text", titleData);
          data.append("imagefile", image.raw, image.raw.jpg);

          try {
               const res = await axios.post("/api/gallery", data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });

               // setDisplayGallery(res.data);
               // console.log(res.data);
               // console.log(displayGallery);

               setNotify(res);
               console.log(notify);
          } catch (error) {
               // console.log(error);
               // setError(error.response);
          }
     };
     // <span className="alert-success">{notify && notify.data}</span>
     // <span className="alert-danger">{error && error.data}</span>
     return (
          <div className="my-5">
               <h3 className="primary">Gallery</h3>

               <Form onSubmit={UploadGallery}>
                    <FormGroup>
                         <Label for="exampleText" className="primary">
                              Gallery File
                         </Label>
                         <Input
                              type="file"
                              name="file"
                              required
                              onChange={handleChange}
                         />
                    </FormGroup>
                    <FormGroup>
                         <Label name="text" for="text" className="primary">
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
               </Form>
          </div>
     );
};

export default Gallery;
