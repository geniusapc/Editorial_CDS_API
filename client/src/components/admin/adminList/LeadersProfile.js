import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import formData from "form-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";

const LeadersProfile = () => {
     const [leaders, setLeaders] = useState([]);
     const [cookies] = useCookies(["auth-token"]);
     const [image, setImage] = useState({ preview: "", raw: "" });
     const [form, setForm] = useState(false);
     const [title, setTitle] = useState();
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");
             const [loading, setLoading] = useState();
     useEffect(() => {
          const getLeadersProfile = async () => {
               try {
                    const res = await axios.get("/api/leaders");

                    setLeaders(res.data);
               } catch (error) {}
          };

          getLeadersProfile();
     }, [notify]);

     const handleChange = e => {
          setImage({
               preview: URL.createObjectURL(e.target.files[0]),
               raw: e.target.files[0]
          });
     };
     const updateLeader = async e => {
          e.preventDefault();
          const value = cookies["auth-token"];
          const { name, position } = e.target.elements;
          let nameData = name.value,
               positionData = position.value;

          const data = new formData();
          data.append("name", nameData);
          data.append("position", positionData);
          data.append("imagefile", image.raw, image.raw.jpg);

          try {
               setLoading(true)
               const res = await axios.put(`/api/leaders/${title}`, data, {
                    headers: {
                         "conent-type": "multipart/form-data",
                         "x-auth-token": `${value}`
                    }
               });
               setNotify(res.data);
               setLoading(false)
          } catch (error) {
               setError(error.response.data);
               setLoading(false)
          }
     };

     return (
          <div className={"form-top"}>
               <div className={"profile-info container"}>
                    <h4 className={"primary mx-auto my-4"}>Our Leaders</h4>
                    <div className="text-center">
                         {notify ? (
                              <span className="alert-success">{notify}</span>
                         ) : (
                              <span className="alert-danger">{error}</span>
                         )}
                    </div>
                    <div className={"event-grid"}>
                         {leaders.map(lead => (
                              <Card body key={lead.id} className="my-2 mx-2">
                                   <CardTitle>{lead.name}</CardTitle>
                                   <CardText>{lead.title}.</CardText>
                                   <button
                                        onClick={() => {
                                             setForm(true);
                                             setTitle(lead.title.toLowerCase());
                                        }}
                                        className="btn-primary btn-block btn"
                                   >
                                        Update
                                   </button>
                              </Card>
                         ))}
                    </div>
                    <div
                         className="edit-form"
                         style={{ visibility: form ? "visible" : "hidden" }}
                    >
                         <span
                              className="text-right"
                              onClick={() => setForm(false)}
                         >
                              x
                         </span>
                         <Form onSubmit={updateLeader}>
                              <FormGroup>
                                   <Label for="title" className="text-white">
                                        Name
                                   </Label>
                                   <Input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        required
                                   />
                              </FormGroup>
                              <FormGroup>
                                   <Label for="message" className="text-white">
                                        position
                                   </Label>
                                   <Input
                                        type="text"
                                        name="position"
                                        placeholder="position ......."
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
                                    {loading ?   <FontAwesomeIcon
                              style={{
                                   marginRight: "1rem",
                                   marginTop: ".4rem"
                              }}
                              icon="spinner"
                              size="1x"
                              color="yellow"
                              spin
                         />: "Submit"}
                              </Button>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default LeadersProfile;
