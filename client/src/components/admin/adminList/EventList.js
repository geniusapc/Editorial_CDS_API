import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import formData from "form-data";
import { useCookies } from "react-cookie";

const EventList = () => {
     const [displayEvent, setDisplayEvent] = useState([]);
     const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");
     const [title, setTitle] = useState("");
     const [text, setText] = useState("");
     const [date, setDate] = useState("");
     const [postId, setPostId] = useState("");
     const [form, setForm] = useState(false);
     const [image, setImage] = useState({ preview: "", raw: "" });

     const getEventId = async id => {
          try {
               const value = cookies["auth-token"];
               const res = await axios.delete(`/api/event/${id}`, {
                    headers: {
                         "x-auth-token": `${value}`
                    }
               });
               setNotify(res.data);
          } catch (error) {
               setError(error);
          }
     };

     useEffect(() => {
          const getAllNews = async () => {
               try {
                    const res = await axios.get("/api/event");
                    setDisplayEvent(res.data);
                    console.log(res.data);
               } catch (error) {
                    console.log(error.response);
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

     const loadEditItems = (title, text, date, id) => {
          setForm(true);
          setText(text);
          setTitle(title);
          setDate(date);
          setPostId(id);
     };
     const updateEvent = async e => {
          e.preventDefault();
          const value = cookies["auth-token"]
          const data = new formData();
          data.append("title", title);
          data.append("text", text);
          data.append("date", date);
          data.append("imagefile", image.raw, image.raw.jpg);
          try {
               const res = await axios.put(`/api/leaders/${title}`, data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `${value}`
                    }
               });
               setNotify(res.data);
          } catch (error) {
               setError(error.response.data);
          }
     };

     return (
          <div className="form-top">
               <div className="container m-auto text-center">
                    <h3 className="text-primary mb-2">All Events For Admin</h3>
                    {notify ? (
                         <span className="alert-success">{notify}</span>
                    ) : (
                         <span className="alert-danger">{error}</span>
                    )}
                    <span>
                         {" "}
                         <strong className="text-primary">
                              {" "}
                              Total Events Uploaded
                         </strong>{" "}
                         : {displayEvent.length}
                    </span>
                    <ol>
                         {displayEvent.map(event => (
                              <li className="my-3" key={event.title}>
                                   <span className="m-auto text-center">
                                        <span className={"trending"}>
                                             <img
                                                  height="30"
                                                  width="30"
                                                  className={""}
                                                  src={event.image}
                                                  alt="news"
                                             />
                                             <h5>{event.title}</h5>
                                        </span>
                                        <span className="trending">
                                             <button
                                                  onClick={() =>
                                                       loadEditItems(
                                                            event.title,
                                                            event.text,
                                                            event.createdAt,
                                                            event.id
                                                       )
                                                  }
                                                  className=" btn btn-primary m-2 "
                                                  type="submit"
                                             >
                                                  Edit
                                             </button>

                                             <button
                                                  type="submit"
                                                  className="btn btn-danger m-2"
                                                  onClick={() =>
                                                       getEventId(event.id)
                                                  }
                                             >
                                                  Delete
                                             </button>
                                        </span>
                                   </span>
                              </li>
                         ))}
                    </ol>
               </div>
               <div
                    className="edit-form"
                    style={{ visibility: form ? "visible" : "hidden" }}
               >
                    <span className="text-right" onClick={() => setForm(false)}>
                         x
                    </span>
                    <Form onSubmit={updateEvent}>
                         <FormGroup>
                              <Label for="title" className="text-white">
                                   Title
                              </Label>
                              <Input
                                   type="text"
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}
                                   name="name"
                                   placeholder="name"
                                   required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="message" className="text-white">
                                   Text
                              </Label>
                              <Input
                                   type="textarea"
                                   value={text}
                                   onChange={e => setText(e.target.value)}
                                   name="text"
                                   placeholder="text"
                                   required
                              />
                         </FormGroup>
                         <FormGroup>
                              <Label for="message" className="text-white">
                                   Date
                              </Label>
                              <Input
                                   type="date"
                                   value={date}
                                   onChange={e => setDate(e.target.value)}
                                   name="text"
                                   placeholder="date"
                                   required
                              />
                         </FormGroup>

                         <FormGroup>
                              <Label for="file" className="primary">
                                   file
                              </Label>
                              <Input
                                   type="file"
                                   required
                                   onChange={handleChange}
                              />
                         </FormGroup>
                         <Button
                              type="submit"
                              className="bg-warning  text-white btn btn-block mb-3"
                         >
                              Submit
                         </Button>
                    </Form>
               </div>
          </div>
     );
};

export default EventList;
