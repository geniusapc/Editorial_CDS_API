import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
     const [displayEvent, setDisplayEvent] = useState([]);
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");

     const getEventId = async id => {
          try {
               const res = await axios.delete(`/api/event/${id}`, {
                    headers: {
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
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
     }, []);

     return (
          <div className="container m-auto text-center">
               <h3 className="text-primary mb-2">All Events For Admin</h3>
               <span className="alert-success">{notify && notify}</span>
               <span className="alert-danger">{error && error}</span>
               <ol>
                    {displayEvent.map(event => (
                         <li className="my-3" key={event.title}>
                              <span className="m-auto text-center">
                                   <span className={"trending"}>
                                        <img
                                             height="30"
                                             width="30"
                                             className={""}
                                             src={event.imageName}
                                             alt="news"
                                        />
                                        <h5>{event.title}</h5>
                                   </span>
                                   <span className="trending">
                                        <button
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
     );
};

export default EventList;
