import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const EventList = () => {
     const [displayEvent, setDisplayEvent] = useState([]);
          const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");

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

     return (
          <div className="form-top">
          <div className="container m-auto text-center">
               <h3 className="text-primary mb-2">All Events For Admin</h3>
                 {notify ? (
                         <span className="alert-success">{notify}</span>
                    ) : (
                         <span className="alert-danger">{error}</span>
                    )}
                     <span> <strong  className="text-primary"> Total Events Uploaded</strong> : {displayEvent.length}</span>
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
          </div>
     );
};

export default EventList;
