import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Typed from "react-typed";
import axios from "axios";

const LandingPage = props => {
     const [search, setSearch] = useState("");
     const [posts, setPosts] = useState([]);

     const textLines = [
          `Give information`,
          `Write arcticles`,
          `Develop students academically`,
          `Enlighten our host community`
     ];

     const searchhEvent = async e => {
          e.preventDefault();

          if (search === "") {
               return;
          } else {
               try {
                    const res = await axios.get(`/api/event/search/${search}`);
                    setPosts(res.data);
                    console.log(res.data);
               } catch (error) {}
          }
     };

     return (
          <section className={"section-a"}>
               <div className={"page "}>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <h1 className={"mb-3"}>
                         Welcome To Editoral And Publicity
                         <br /> CDS Group Saki-West
                    </h1>
                    </ScrollAnimation >
                    <ScrollAnimation animateIn='bounceInRight'
                           animateOut='bounceOutLeft'>
                    <em className="text-white m-3 h4  italic">
                         <span className="mr-2">We</span>
                         <Typed
                              strings={textLines}
                              typeSpeed={80}
                              backSpeed={50}
                              loop
                         />
                    </em>

                    </ScrollAnimation>
                    <div className={"pb-5 mt-2"}>
                    <div className={"mx-2"}>
                         <div className={"search-btn "}>
                              <form onSubmit={searchhEvent}>
                                   <input
                                        type="text"
                                        value={search}
                                        onChange={e =>
                                             setSearch(e.target.value)
                                        }
                                        placeholder="Seacrh your favorite news here..."
                                   />
                                   <button className="land-btn" type="submit">
                                        <FontAwesomeIcon
                                             style={{
                                                  marginRight: "1rem",
                                                  marginTop: ".4rem"
                                             }}
                                             icon={"search"}
                                             size="2x"
                                             color="#008736"
                                        />
                                   </button>
                              </form>
                         </div>

                         <div className="m-1">
                              <ListGroup>
                                   {posts.map(post => (
                                        <Link to={`/news/${post.title}`}>
                                             <ListGroupItem>
                                                  <span className="text-black m-1">
                                                       {post.title}
                                                  </span>{" "}
                                             </ListGroupItem>
                                        </Link>
                                   ))}
                              </ListGroup>
                         </div>
                    </div>
                      </div>
               </div>
             
          </section>
     );
};

export default LandingPage;
