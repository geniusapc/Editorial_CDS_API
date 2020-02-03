import React, { useState, useEffect } from "react";
import axois from "axios";
import Loading from "../../shared/loader/Loader";

const Gallery = () => {
     const [eventPictures, setEventPictures] = useState([]);
     const [pastLeaders, setPastleaders] = useState([]);
     const [loading, setLaoding] = useState();

     useEffect(() => {
          const getGallery = async () => {
               try {
                    setLaoding(true);
                    const res = await axois.get("/api/gallery");

                    setEventPictures(res.data);
                    console.log(res.data);
                    setLaoding(false);
               } catch (error) {
                    console.log(error.data);
               }
          };
          const getPastLeaders = async () => {
               try {
                    setLaoding(true);
                    const res = await axois.get("/api/pastleaders");
                    setPastleaders(res.data);
                    setLaoding(false);
               } catch (error) {
                    console.log(error.data);
               }
          };
          getPastLeaders();
          getGallery();
     }, []);

     return (
          <div className="gallery-container">
               <div className="gallery">
                    <h1 className="primary mb-5 mt-3 text-center">Gallery</h1>
                    <div className="box">
                         {loading && <Loading />}
                         <div className="events-pictures p-3 mt-2 mx-auto">
                              <h3>All Events</h3>
                              <div className="flex-pics">
                                   {eventPictures.length ? (
                                        eventPictures.map(event => (
                                             <div
                                                  className="event-box m-2 "
                                                  key={event.id}
                                             >
                                                  <div className="picture">
                                                       {event.text}
                                                  </div>
                                                  <div className="title">
                                                       <span>
                                                            {event.title}
                                                       </span>
                                                  </div>
                                             </div>
                                        ))
                                   ) : (
                                        <>
                                             <p> Oops no Gallery </p>
                                        </>
                                   )}
                              </div>
                         </div>
                         <div className="events-pictures p-3 mt-2 mx-auto">
                              <h3>Past Leaders</h3>
                              <div className="flex-pics">
                                   {pastLeaders.length ? (
                                        pastLeaders.map(past => (
                                             <div
                                                  className="event-box m-2 p-1"
                                                  key={past.id}
                                             >
                                                  <div className="picture">
                                                       {past.text}
                                                  </div>
                                                  <div className="title">
                                                       <span>{past.title}</span>
                                                  </div>
                                             </div>
                                        ))
                                   ) : (
                                        <>
                                             <p> Oops no Past Leaders </p>
                                        </>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Gallery;
