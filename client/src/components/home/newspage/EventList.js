import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     Card,
     CardImg,
     CardText,
     CardBody,
     CardTitle,
     CardSubtitle
} from "reactstrap";

const EventList = ({ title, text, image, time }) => {
     return (
          
          <Link to={`/news/${title}`}>
               <div className="my-4 container-fluid">
                    <Card>
                         <CardImg
                              top
                              height="200"
                              width="400"
                              src={image}
                              alt="Card image cap"
                              style={{
                                   height: "500p",
                                   borderRadius: "8px",
                                   backgroundPosition: "center",
                                   backgroundSize: "cover",
                                   height: "500px important!"
                              }}
                         />
                         <CardBody className="">
                              <CardTitle>
                                   <h3 className="primary">{title}</h3>
                              </CardTitle>
                              <CardSubtitle className="my-3">
                                   <span>
                                        {" "}
                                        <FontAwesomeIcon
                                             style={{
                                                  marginRight: ".2rem",
                                                  marginTop: ".2rem"
                                             }}
                                             icon="clock"
                                             size="1x"
                                             color="grey"
                                        />
                                        <Moment fromNow>{time}</Moment>
                                   </span>
                              </CardSubtitle>
                              <CardText className="">
                                   {text.slice(0, 150)}....
                              </CardText>
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
