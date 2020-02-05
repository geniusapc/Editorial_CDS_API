import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     Card,
     CardImg,
     CardText,
     CardBody,
     CardTitle,
     CardSubtitle
} from "reactstrap";

const EventList = ({ title, text, img, id }) => {
     return (
          <Link to={`/news/${title}`}>
               <div className="my-3 mx-5">
                    <Card>
                         <CardImg
                              top
                              width="100%"
                              src={img}
                              alt="Card image cap"
                         />
                         <CardBody className="">
                              <CardTitle>
                                   <h2 className="primary"> {title}</h2>
                              </CardTitle>
                              <CardSubtitle className="my-3">
                                   Card subtitle
                              </CardSubtitle>
                              <CardText className="">{text}....</CardText>
                         </CardBody>
                         <div className="comment">
                              <div>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="heart"
                                        size="1x"
                                        color="#e9ecef"
                                   />
                              </div>
                              <div>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="comment"
                                        size="1x"
                                        color="#e9ecef"
                                   />
                              </div>
                              <div>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="share"
                                        size="1x"
                                        color="#e9ecef"
                                   />
                              </div>
                         </div>
                    </Card>
               </div>
          </Link>
     );
};

export default EventList;
