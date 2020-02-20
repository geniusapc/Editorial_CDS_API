import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import formData from "form-data";

const Gallery = () => {
     const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const [image, setImage] = useState({ preview: "", raw: "" });
     const [notify, setNotify] = useState([]);
     const [error, setError] = useState("");
     const [loading, setLoading] = useState();

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
               setLoading(true);
               const res = await axios.post("/api/gallery", data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `${value}`
                    }
               });
               setNotify(res.statusText);
               text = "";
               setLoading(false);
          } catch (error) {
               setError(error.response);
               setLoading(false);
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
                         {loading ? (
                              <FontAwesomeIcon
                                   style={{
                                        marginRight: ".2rem",
                                        marginTop: ".2rem"
                                   }}
                                   icon="spinner"
                                   size="1x"
                                   color="yellow"
                                   spin
                              />
                         ) : (
                              "  Submit"
                         )}
                    </Button>
               </Form>
               <Link to="/all-galleries-posted">
                    <button className="btn btn-primary m-3">See All</button>
               </Link>
          </div>
     );
};

export default Gallery;
