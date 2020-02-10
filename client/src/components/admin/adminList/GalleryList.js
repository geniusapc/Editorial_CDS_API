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
               setNotify(res.response);
          } catch (error) {
               console.log(error.response);
               setError(error.response);
          }
     };

     useEffect(() => {
          const getAllGallery = async () => {
               try {
                    const res = await axios.get("/api/gallery");
                    setDisplayGallery(res.data);
                    console.log(res.data);
               } catch (error) {
                    console.log(error.response);
               }
          };
          getAllGallery();
     }, []);

     return (
          <div className="container m-auto text-center">
               <h3 className="text-primary mb-2">All Galleries For Admin</h3>
               <span className="alert-success">{notify && notify.data}</span>
               <span className="alert-danger">{error && error.data}</span>
               <div className="scroll mx-auto">
                    <ol className="gallery-list">
                         {displayGallery.map(event => (
                              <li className="my-3" key={event.id}>
                                   <span className="m-auto text-center">
                                        <span className={"trending"}>
                                             <img
                                                  height="30"
                                                  width="30"
                                                  className={""}
                                                  src={event.imageName}
                                                  alt="news"
                                             />
                                             <h5>{event.text}</h5>
                                        </span>
                                        <p>{event.createdAt}</p>
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
                                                       getGalleryById(event.id)
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

export default GalleryList;
