import React from "react";
// import image from "./slide3.jpg";

const Profiles = props => {
     return (
          <div className={"profile"}>
               <div className={"clip-path"}></div>
               <div className={"profile-info"}>
                    <h2 className={"primary mx-auto"}>Our Leaders</h2>
                    <div className={"event-grid"}>
                         <div className={"card m-5"}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src="https://res.cloudinary.com/cmcwebcode/image/upload/v1574429979/IMG-20191122-WA0003_rzilld.jpg"
                                             alt="head"
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Mr Atere I.O</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             Saki-West Local government
                                             Inspector
                                             <br />
                                             (LGI)
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                   </p>
                              </div>
                         </div>
                         <div className={"card m-5 "}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src="https://res.cloudinary.com/cmcwebcode/image/upload/v1574429943/IMG-20191114-WA0020_warnsv.jpg"
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Okpara Ifeanyi Dominic</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             OY/19A/2951
                                             <br />
                                             Corper Liason Officer (CLO)
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                   </p>
                              </div>
                         </div>
                         <div className={"card m-5 "}>
                              <div className={"card__body  p-2"}>
                                   <div className={"card__body-img "}>
                                        <img
                                             className={"img-rounded"}
                                             src="https://res.cloudinary.com/cmcwebcode/image/upload/v1573994923/Capture_tuydzi.png"
                                             alt="leader"
                                        />
                                   </div>
                              </div>
                              <div className={"card__body-title"}>
                                   <h3>Chinweike Michael Chinonso</h3>
                              </div>
                              <div className={"card__body-text mt-1 p-3"}>
                                   <p>
                                        <strong>
                                             OY/19A/0131
                                             <br /> Editor in Chief
                                        </strong>
                                   </p>
                              </div>

                              <div className={"card__body-footer"}>
                                   <p>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                        <a href="www.com.com">social</a>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profiles;
