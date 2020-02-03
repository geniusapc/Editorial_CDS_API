import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
     const date = new Date();
     const getYear = `${date.getFullYear()}`;
     return (
          <>
               <footer className={"footer  text-center"}>
                    <div className={"main__foot  "}>
                         <div className={"main__foot-logo mt-4"}>
                              <img
                                   src="http://res.cloudinary.com/cmcwebcode/image/upload/v1573994987/nysclogo_vneekm.jpg"
                                   alt=""
                                   className={"my-4"}
                              />
                              <h2>Editoral & Publicity Cds Groups saki,</h2>
                         </div>
                         <form className={"form"}>
                              <div className={"form__control my-3"}>
                                   <input
                                        type="text"
                                        placeholder="example@gmail.com"
                                   />
                                   <input type="submit" value="Subscribe" />
                              </div>
                         </form>
                    </div>

                    <div className={"social__icons"}>
                         <div className={"social__icons-box"}>
                              <blockquote>follow us on</blockquote>
                         </div>
                    </div>
                    <address className={"mb-3 text-medium"}>
                         <small className={"text-medium "}>
                              made with{" "}
                              <FontAwesomeIcon
                                   style={{
                                        margin: " 0 .4rem"
                                   }}
                                   icon="heart"
                                   size="1x"
                                   color="#dc3545"
                              />
                              by cmc
                              <span>WebCode</span> & prince
                              <span>Arthur</span>
                         </small>
                    </address>
                    <p className={"mt-1 pb-4 flow text-medium"}>
                         <small className={"mt-1 pb-4"}>
                              Editoral cds groupsaki &copy; {getYear}
                         </small>
                    </p>
               </footer>
          </>
     );
};

export default Footer;
