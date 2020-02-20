import React, { useState, useEffect } from "react";

import EventList from "./EventList";
import Loading from "../../../shared/loader/Loader";
import Pagination from "../../pagination/Pagination";

import axios from "axios";

const Events = props => {
     const [currentPage, setCurrentPage] = useState(1);
     // const [postsPerPage] = useState(3);
     const [loading, setLoading] = useState();
     const [posts, setPosts] = useState([]);

     useEffect(() => {
          const getAllNews = async () => {
               try {
                    setLoading(true);
                    const res = await axios.get("/api/event");

                    setPosts(res.data);
                    setLoading(false);
               } catch (error) {}
          };
          getAllNews();
     }, []);
     const postsPerPage = 3;
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
     const paginate = pageNumber => setCurrentPage(pageNumber);
     return (
          <div>
               <div className="event-title ">
                    <div>
                         <span />
                         <h3>EVENTS</h3>
                         <span />
                    </div>
               </div>

               <div className="event-grid">
                    {loading ? (
                         <Loading />
                    ) : (
                         currentPost.map(news => (
                              <div className="container-fluid" key={news.id}>
                                   <EventList
                                        key={news.id}
                                        title={news.title}
                                        text={news.text}
                                        image={news.image}
                                        time={news.createdAt}
                                   />
                              </div>
                         ))
                    )}
               </div>
               <div className="align-content-center">
                    <Pagination
                         postsPerPage={2}
                         totalPosts={posts.length}
                         paginate={paginate}
                    />
               </div>
          </div>
     );
};

export default Events;
