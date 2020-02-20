import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// import image from "./slide2.jpg";

const ArticlesList = props => {
     const [displayEvent, setDisplayEvent] = useState([]);
     useEffect(() => {
          const getAllNews = async () => {
               try {
                    const res = await axios.get("/api/event");
                    setDisplayEvent(res.data);
               } catch (error) {}
          };
          getAllNews();
     }, []);
     return (
          <div className=" trend-box  container mx-auto  center main ">
               <div className=" mb-4 mt-3 bg-white current-news">
                    <article className={"trending-news"}>
                         <h4 className="bg-primary text-white p-2 mx-2">
                              Trending News.
                         </h4>
                         {displayEvent.sort().map(event => (
                              <Link to={`/news/${event.title}`} key={event.id}>
                                   <div>
                                        <div className={"trending"}>
                                             <img
                                                  height="30"
                                                  width="30"
                                                  style={{
                                                       borderRadius: "6px"
                                                  }}
                                                  src={event.image}
                                                  alt="news"
                                             />
                                             <h5>{event.title}</h5>
                                        </div>
                                   </div>
                              </Link>
                         ))}
                    </article>
               </div>
               <div className={"articles mb-5 "}>
                    <article>
                    <ScrollAnimation animateIn='flipInX'
                      afterAnimatedIn={function afterAnimatedIn(v) {
	              var t = "Animate In finished.\n";
	              t += 'v.onScreen: ' + v.onScreen + '\n';
	              t += 'v.inViewport: ' + v.inViewport; }}>
                         <h3>About Nigeria</h3>
                         <p className={""}>
                              The history of Nigeria can be traced to
                              prehistoric settlers (Nigerians) living in the
                              area as early as 1100 BC.
                              <br /> Numerous ancient African civilizations
                              settled in the region that is today Nigeria.
                              <br />
                         </p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'>
                         <a
                              href="https://en.wikipedia.org/wiki/History_of_Nigeria"
                              target="_blanck"
                              className={
                                   "btn-primary btn mt-3  ml-3   py-2 px-5"
                              }
                         >
                              read more
                         </a>
                          </ScrollAnimation>
                    </article>
               </div>
          </div>
     );
};

export default ArticlesList;
