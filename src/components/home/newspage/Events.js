import React, { useState, useEffect, useContext } from "react";
import { EventContext } from "../../../shared/contextapi/EventProvider";
import EventList from "./EventList";
import Pagination from "../../pagination/Pagination";
import Loader from "../../../shared/loader/Loader";

const Events = props => {
     const [newsItem, setNewsItem] = useContext(EventContext);

     const [currentPage, setCurrentPage] = useState(1);
     const [loader, setLoader] = useState(true);
     const [postPerpage] = useState(6);

     // const fetchEvents = async () => {
     //      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     //      setLoader(true);
     //      const data = await res.json();
     //      setLoader(true);
     //      console.log(data);
     //      setNewsItem(data);
     //      setLoader(false);
     //      console.log(newsItem);
     // };

     const paginate = pageNumber => setCurrentPage(pageNumber);

     // useEffect(() => {
     //      fetchEvents();
     // }, []);

     //Get the Current Page

     const indexOfLastPost = currentPage * postPerpage;
     const indexOfFirstPage = indexOfLastPost - postPerpage;
     const currentPosts = newsItem.slice(indexOfFirstPage, indexOfLastPost);

     return (
          <>
               <div className="event-title">
                    <div>
                         <span />
                         <h3>EVENTS</h3>
                         <span />
                    </div>
               </div>
               <div className="container mx-auto event-grid">
                    {loader ? (
                         <Loader />
                    ) : (
                         currentPosts.map(news => (
                              <EventList
                                   key={news.id}
                                   title={news.title}
                                   image={news.img}
                                   text={news.text}
                              />
                         ))
                    )}
                    <Pagination
                         className=" center"
                         postPerPage={postPerpage}
                         totalPosts={newsItem.length}
                         paginate={paginate}
                    />
               </div>
          </>
     );
};

export default Events;
