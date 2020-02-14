import React, { useState, useEffect } from "react";
import axios from "axios";

const GalleryList = () => {
     const [displayGallery, setDisplayGallery] = useState([]);
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");

     const getGalleryById = async id => {
          console.log(id);

          try {
               const res = await axios.delete(`/api/gallery/${id}`, {
                    headers: {
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });
               console.log(res);

               setNotify(res);
          } catch (error) {
               setError(error);
          }
     };

     useEffect(() => {
          const getAllGallery = async () => {
               try {
                    const res = await axios.get("/api/gallery");
                    setDisplayGallery(res.data);
                    console.log(res.data);
               } catch (error) {
                    setError(error);
               }
          };
          getAllGallery();
     }, [notify]);

     return (
          <div className="form-top">
               <div className="container my-4 mx-auto text-center">
                    <h3 className="text-primary mb-2">
                         All Galleries For Admin
                    </h3>
                    {notify ? (
                         <span className="alert-success">{notify.data}</span>
                    ) : (
                         <span className="alert-danger">{error.data}</span>
                    )}
                    <div className="scroll mx-auto">
                         <span>
                              {" "}
                              <strong className="text-primary">
                                   {" "}
                                   Total pictures uploaded
                              </strong>{" "}
                              : {displayGallery.length}
                         </span>
                         <ol className="gallery-list">
                              {displayGallery.map(event => (
                                   <li className="my-3" key={event.id}>
                                        <span className="m-auto text-center">
                                             <span className={"trending"}>
                                                  <img
                                                       height="30"
                                                       width="30"
                                                       className={""}
                                                       src={event.image}
                                                       alt="news"
                                                  />
                                                  <h5>{event.text}</h5>
                                             </span>
                                             <p>{event.createdAt}</p>
                                             <span className="trending">
                                                  <button
                                                       type="submit"
                                                       className="btn btn-md btn-danger m-2"
                                                       onClick={() =>
                                                            getGalleryById(
                                                                 event.id
                                                            )
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
          </div>
     );
};

export default GalleryList;
