import React, { useState, useEffect } from "react";
import axois from "axios";

const Profiles = props => {
     const [leaders, setLeaders] = useState([]);

     useEffect(() => {
          const getLeadersProfile = async () => {
               try {
                    const res = await axois.get("/api/leaders");

                    setLeaders(res.data);
               } catch (error) {}
          };

          getLeadersProfile();
     }, []);
     return (
          <div className={"profile "}>
               <div className={"clip-path"}></div>
               <div className={"profile-info my-4"}>
                    <h2 className={"primary mx-auto "}>Our Leaders</h2>
                    <div className={"event-grid"}>
                         {leaders.map(lead => (
                              <div className={"card px-5 m-5"} key={lead.id}>
                                   <div className={"card__body  p-2"}>
                                        <div className={"card__body-img "}>
                                             <img
                                                  className={"img-rounded"}
                                                  src={lead.image}
                                                  alt="head"
                                             />
                                        </div>
                                   </div>
                                   <div className={"card__body-title"}>
                                        <h3>{lead.name}</h3>
                                   </div>
                                   <div className={"card__body-text mt-1 p-3"}>
                                        <p>
                                             <strong>{lead.position}</strong>
                                        </p>
                                   </div>

                                   {/*} <div className={"card__body-footer"}>
                                        <p>
                                             <a href="www.com.com">social</a>
                                             <a href="www.com.com">social</a>
                                             <a href="www.com.com">social</a>
                                        </p>
                         </div>*/}
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Profiles;
