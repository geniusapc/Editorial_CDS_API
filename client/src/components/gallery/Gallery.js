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

                    setLaoding(false);
               } catch (error) {}
          };
          const getPastLeaders = async () => {
               try {
                    setLaoding(true);
                    const res = await axois.get("/api/leaders");
                    setPastleaders(res.data);
                    setLaoding(false);
               } catch (error) {}
          };
          getPastLeaders();
          getGallery();
     }, []);

     return (
          <div className="gallery-container form-top">
               <div className="gallery">
                    <h1 className="primary mb-5 mt-3 text-center">Gallery</h1>
                    <div className="box">
                         {loading && <Loading />}
                         <div className="events-pictures p-3 mt-2 mx-auto">
                              <h3>All Events</h3>
                              <div className="row container scroll">
                                   {eventPictures.length ? (
                                        eventPictures.map(event => (
                                             <div
                                                  className="event-box  col-md-3 m-5 "
                                                  key={event.id}
                                             >
                                                  <div className="title">
                                                       {event.text}
                                                  </div>
                                                  <div className="pictures">
                                                       <img
                                                            src={event.image}
                                                            alt="gallery"
                                                            // height="300"
                                                            // weight="300"
                                                       />
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
                                                  className="event-box m-5 p-1"
                                                  key={past.id}
                                             >
                                                  <div className="title">
                                                       {past.text}
                                                  </div>
                                                  <div className="pictures">
                                                       <img
                                                            src={past.image}
                                                            alt="gallery"
                                                            height="200"
                                                            weight="200"
                                                       />
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
