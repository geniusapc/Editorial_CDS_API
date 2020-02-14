import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useCookies } from "react-cookie";
import formData from "form-data";

const Gallery = () => {
     const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const [image, setImage] = useState({ preview: "", raw: "" });
     const [displayGallery, setDisplayGallery] = useState([]);
     const [notify, setNotify] = useState([]);
     const [error, setError] = useState("");

     useEffect(() => {
          const getAllGallery = async () => {
               try {
                    const res = await axios.get("/api/gallery");
                    setDisplayGallery(res.data);
                    console.log(res.data);
               } catch (error) {
                    console.log(error.response.data);
               }
          };
          getAllGallery();
     }, [notify]);

     const handleChange = e => {
          setImage({
               preview: URL.createObjectURL(e.target.files[0]),
               raw: e.target.files[0]
          });
     };
     const UploadGallery = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { text } = e.target.elements;
          const titleData = text.value;

          const data = new formData();
          data.append("text", titleData);
          data.append("imagefile", image.raw, image.raw.jpg);

          try {
               const res = await axios.post("/api/gallery", data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `${value}`
                    }
               });
               setNotify(res.statusText);
               text = "";
          } catch (error) {
               setError(error.response);
          }
     };

     return (
          <div className="my-5">
               <h3 className="primary">Gallery</h3>
               <span className="alert-success">{notify && notify}</span>
               <span className="alert-danger">{error && error}</span>

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
                         <Input type="text" name="text" required />
                    </FormGroup>
                    <Button
                         type="submit"
                         className="bg-primary text-white btn py-2 px-5 mr-2"
                    >
                         Submit
                    </Button>
               </Form>
               <div className="my-2">
                    {displayGallery.splice(0, 5).map(event => (
                         <div key={event.id}>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        className={""}
                                        src={event.image}
                                        alt="news"
                                   />
                                   <h5>{event.text}</h5>
                              </div>
                         </div>
                    ))}
               </div>
               <Link to="/all-galleries-posted">
                    <button className="btn btn-primary m-3">See All</button>
               </Link>
          </div>
     );
};

export default Gallery;
