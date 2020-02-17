import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
     faFacebook,
     faTwitter,
     faLinkedin
} from "@fortawesome/free-brands-svg-icons";

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
                              <div className="social__icons-flex">
                                   <a
                                        href="https://web.facebook.com/chxaHXaxvhgAXinweikemichael.chinonso"
                                        className="facebook social my-4 mx-2"
                                        target="_blanck"
                                   >
                                        <FontAwesomeIcon
                                             icon={faFacebook}
                                             color="white"
                                             size="2x"
                                        />
                                   </a>
                                   <a
                                        href="twitter.com/Mr_Cmc1?s=08"
                                        className="twitter social my-4 mx-2"
                                        target="_blanck"
                                   >
                                        <FontAwesomeIcon
                                             icon={faTwitter}
                                             color="white"
                                             size="2x"
                                        />
                                   </a>

                                   <a
                                        href="https://www.linkedin.com/in/michsachjaschjabhcbascael-infinity-467360a8/"
                                        color="white"
                                        className="instagram social my-4 mx-2"
                                        target="_blanck"
                                   >
                                        <FontAwesomeIcon
                                             icon={faLinkedin}
                                             color="white"
                                             size="2x"
                                        />
                                   </a>
                              </div>
                         </div>
                    </div>
                    <address className={"mb-3 mt-3 text-medium"}>
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
                              <cite>WebCode</cite> & prince
                              <cite>Arthur</cite>
                         </small>
                    </address>
                    <p className={"mt-1 pb-4 flow text-medium"}>
                         <small className={"mt-1 pb-4"}>
                              Editoral cds groupsaki &copy; {getYear} || All
                              right reversed.
                         </small>
                    </p>
               </footer>
          </>
     );
};

export default Footer;
