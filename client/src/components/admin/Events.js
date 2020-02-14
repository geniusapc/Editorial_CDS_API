import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import formData from "form-data";
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Events = () => {
     const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const [image, setImage] = useState({ preview: "", raw: "" });
     const [displayEvent, setDisplayEvent] = useState([]);
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");

     useEffect(() => {
          const getAllNews = async () => {
               try {
                    const res = await axios.get("/api/event");
                    setDisplayEvent(res.data);
               } catch (error) {
                    console.log(error.response.data);
               }
          };
          getAllNews();
     }, [notify]);

     const handleChange = e => {
          setImage({
               preview: URL.createObjectURL(e.target.files[0]),
               raw: e.target.files[0]
          });
     };
     const updateEvents = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { title, text, date } = e.target.elements;
          let titleData = title.value,
               textData = text.value,
               dateData = date.value;
          const data = new formData();
          data.append("title", titleData);
          data.append("text", textData);
          data.append("date", dateData);
          data.append("imagefile", image.raw, image.raw.jpg);

          try {
               const res = await axios.post("/api/event", data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `${value}`
                    }
               });
               console.log(res.data);

               setNotify(res.statusText);
          } catch (error) {
               setError(error.response);
          }
     };

     return (
          <div className="my-5">
               <h3 className="primary">Events</h3>
               <div>
                    {notify ? (
                         <p className="alert-success">{notify}</p>
                    ) : (
                         <span className="alert-danger">{error.data}</span>
                    )}
               </div>
               <Form onSubmit={updateEvents}>
                    <FormGroup>
                         <Label for="title" className="primary">
                              Title
                         </Label>
                         <Input
                              type="text"
                              name="title"
                              placeholder="type event title..."
                              required
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
                              required
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
                         <Input type="file" required onChange={handleChange} />
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
               </Form>
               <>
                    {displayEvent.splice(0, 10).map(event => (
                         <div key={event.title}>
                              <div className={"trending"}>
                                   <img
                                        height="30"
                                        width="30"
                                        src={`/img/post/${event.imageName}`}
                                        alt="news"
                                   />
                                   <h6>{event.title}</h6>
                              </div>
                         </div>
                    ))}
               </>
               <Link to="/all-events-posted">
                    <button className="btn btn-primary m-3">See All</button>
               </Link>
          </div>
     );
};

export default Events;
