import React from "react";
import { Link } from "react-router-dom";
import Posts from "../../readnewspage/Readnews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     Card,
     CardImg,
     CardText,
     CardBody,
     CardTitle,
     CardSubtitle
} from "reactstrap";

const EventList = ({ title, text, image }) => {
     return (
          <div className="my-3 mx-5">
               <Link to="/gallery">
                    <Card className={"mx-auto"}>
                         <CardImg
                              top
                              width="100%"
                              src={image}
                              alt="Card image cap"
                         />
                         <CardBody className="">
                              <CardTitle>
                                   <h2 className={"primary"}> {title}</h2>
                              </CardTitle>
                              <CardSubtitle className="my-3">
                                   Card subtitle
                              </CardSubtitle>
                              <CardText className="">
                                   {text.slice(0, 150)}....{" "}
                              </CardText>
                         </CardBody>
                         <div className={"comment"}>
                              <div>
                                   <h6 className={"primary"}> Like</h6>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="heart"
                                        size="1x"
                                        color="#ddd"
                                   />
                              </div>
                              <div>
                                   <h6 className={"primary"}> Message</h6>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="comment"
                                        size="1x"
                                        color="#ddd"
                                   />
                              </div>
                              <div>
                                   <h6 className={"primary"}> Share</h6>
                                   <FontAwesomeIcon
                                        style={{
                                             marginRight: "1rem",
                                             marginTop: ".4rem"
                                        }}
                                        icon="share"
                                        size="1x"
                                        color="#ddd"
                                   />
                              </div>
                         </div>
                    </Card>
               </Link>
          </div>
     );
};

export default EventList;
