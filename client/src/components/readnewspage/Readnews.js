import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import "react-sharingbuttons/dist/main.css";

const Readnews = ({ match }) => {
     const url = window.location.href;
     const [news, setNews] = useState([]);
     const [eventComment, setEventComment] = useState();
     const [name, setName] = useState();
     const [text, setText] = useState();
     const [loading, setLoading] = useState();
     const [newsId, setNewsId] = useState();

     const array = [];

     useEffect(() => {
          const getData = async (posts, id) => {
               await posts.filter(post => {
                    if (post.title === id) {
                         let title = post.title;
                         let body = post.text;
                         let image = post.image;
                         let time = post.createdAt;
                         array.push(post.comments);
                         setNewsId(post.id);
                         loadData(title, body, image);
                         // getCommentsArray(comments)
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
     // const getCommentsArray = (message) =>{
     //      array.push(message)
     //   const  comment = array.flat()
     //      setEventComment(comment)
     //      console.log(eventComment);

     // }

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
          } catch (e) {}
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

                         <div className="mb-2">
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
                         <div className="mt-2">
                              <p className="text-primary">Share on: </p>
                              <Facebook url={url} />
                              <Twitter
                                   url={url}
                                   shareText={`latest saki corpers news ${news.title}`}
                              />
                         </div>
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
               <div className="container mx-auto ">
                    <h4 className="text-primary mt-3">Comments</h4>
                    <div
                         className="bg-light m-auto p-2 mt-2"
                         style={{ borderRadius: "10px" }}
                    ></div>
               </div>
          </div>
     );
};

// <div>
//                          {/*comment.forEach( message =>(
//                               <div key={message.id}>
//                                    <h6>{message.name}</h6>
//                                    <p>
//                                    {message.comment}
//                                    </p>
//                               </div>
//                          ))*/}
//                     </div>

export default Readnews;
