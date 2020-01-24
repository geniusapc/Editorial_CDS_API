import React, { useState, useContext } from "react";
import EventList from "./EventList";
import Loading from "../../../shared/loader/Loader";
import Pagination from "../../pagination/Pagination";
import { EventContext } from "../../../shared/contextapi/EventProvider";

const Events = props => {
     const [posts] = useContext(EventContext);
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage, setPostPerPage] = useState(10);
     // const [laoding, setLoading] = useState(false);
     // const [newsItem] = useState([]);

     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
     const paginate = pageNumber => setCurrentPage(pageNumber);
     // image={news.img}
     return (
          <div>
               <div className="event-title mb-5">
                    <div>
                         <span />
                         <h3>EVENTS</h3>
                         <span />
                    </div>
               </div>
               <div className="container mx-auto event-grid">
                    {posts ? (
                         currentPost.map(news => (
                              <EventList
                                   key={news.id}
                                   title={news.title}
                                   text={news.body}
                              />
                         ))
                    ) : (
                         <Loading />
                    )}
                    <Pagination
                         postsPerPage={postsPerPage}
                         totalPosts={posts}
                         paginate={paginate}
                    />
               </div>
          </div>
     );
};

export default Events;
