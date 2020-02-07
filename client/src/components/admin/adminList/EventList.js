import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
     const [displayEvent, setDisplayEvent] = useState([]);

     useEffect(() => {
          const getAllNews = async () => {
               try {
                    const res = await axios.get("/api/event");
                    setDisplayEvent(res.data);
                    console.log(res.data);
               } catch (error) {
                    console.log(error.response.data);
               }
          };
          getAllNews();
     }, []);

     return (
          <div>
               {displayEvent.map(event => (
                    <div key={event.title}>
                         <div className={"trending"}>
                              <img
                                   height="30"
                                   width="30"
                                   className={""}
                                   src={event.imageName}
                                   alt="news"
                              />
                              <h5>{event.title}</h5>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default EventList;
