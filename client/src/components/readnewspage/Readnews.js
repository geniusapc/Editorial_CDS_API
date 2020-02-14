import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Readnews = ({ match }) => {
     const [news, setNews] = useState([]);
     const [name, setName] = useState();
     const [text, setText] = useState();
     const [loading, setLoading] = useState();
     const [newsId, setNewsId] = useState();

     useEffect(() => {
          const printId = id => console.log(id);
          printId(match.params.id);
          const getData = (posts, id) => {
               posts.filter(post => {
                    if (post.title === id) {
                         console.log(post);
                         let title = post.title;
                         let body = post.text;
                         let image = post.image;
                         let time = post.createdAt;
                         setNewsId(post.id);
                         loadData(title, body, image);
                    }
               });
          };

          const getAllNews = async () => {
               try {
                    setLoading(true);
                    const res = await axios.get("/api/event");
                    getData(res.data, match.params.id);
                    setLoading(false);
               } catch (error) {
                    console.log(error);
               }
          };
          getAllNews();
     }, []);

     const loadData = (title, body, image, createdAt) =>
          setNews({ title: title, body: body, image: image, time: createdAt });

     const messageHandler = async e => {
          e.preventDefault();
          const config = { header: { "content-type": "application/json" } };
          try {
               const res = await axios.post(
                    `/api/event/comment/${newsId}`,
                    {
                         name: name,
                         comment: text
                    },
                    config
               );
               setName("");
               setText("");
               console.log(res);
          } catch (e) {
               console.log(e);
          }
     };

     return (
          <div className="form-top">
               {loading ? (
                    <div className="my-5  text-center">
                         <FontAwesomeIcon
                              style={{
                                   marginRight: "1rem",
                                   marginTop: ".4rem"
                              }}
                              icon="spinner"
                              size="1x"
                              color="green"
                              spin
                         />
                    </div>
               ) : (
                    <div className="container-sm my-3">
                         <h3 className="text-primary my-5">{news.title}</h3>
                         <div>
                              <img
                                   src={news.image}
                                   alt="news image"
                                   // className="card-img"
                                   height="300"
                                   width="300"
                              />
                         </div>
                         <span className="my-3">
                              {" "}
                              <FontAwesomeIcon
                                   style={{
                                        marginRight: ".2rem",
                                        marginTop: ".2rem"
                                   }}
                                   icon="clock"
                                   size="1x"
                                   color="grey"
                              />
                              <Moment fromNow>{news.time}</Moment>
                         </span>
                         <p className="my-3">{news.body}</p>
                         <div className="my-3">
                              <Form onSubmit={messageHandler}>
                                   {" "}
                                   <FormGroup>
                                        <Label
                                             for="exampleEmail"
                                             className="text-primary"
                                        >
                                             Name
                                        </Label>
                                        <Input
                                             type="text"
                                             name="text"
                                             value={name}
                                             onChange={e =>
                                                  setName(e.target.value)
                                             }
                                             placeholder="Your Name"
                                        />
                                   </FormGroup>{" "}
                                   <FormGroup>
                                        <Label
                                             for="exampleText"
                                             className="text-primary"
                                        >
                                             {" "}
                                             Comments
                                        </Label>
                                        <Input
                                             value={text}
                                             type="textarea"
                                             name="text"
                                             onChange={e =>
                                                  setText(e.target.value)
                                             }
                                             placeholder="comment here"
                                        />
                                   </FormGroup>
                                   <button
                                        type="submit"
                                        className=" btn btn-block btn-primary"
                                   >
                                        comment
                                   </button>
                              </Form>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Readnews;
