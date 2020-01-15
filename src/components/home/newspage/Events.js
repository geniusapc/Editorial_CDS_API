import React, { useState, useEffect } from "react";
import EventList from "./EventList";
import Pagination from "../../pagination/Pagination";
import Loader from "../../../shared/loader/Loader";

const Events = props => {
     const news = {
          //  {
          //                id: 1,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           },
          //           {
          //                id: 2,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           },
          //           {
          //                id: 3,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           }
     };

     // "https://jsonplaceholder.typicode.com/posts";

     const [newsItem, setNewsItem] = useState([
          // {
          //      id: 1,
          //      title: " News update",
          //      text:
          //           "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //      img: "https://source.unsplash.com/user/erondu/1600x900"
          // },
          // {
          //      id: 2,
          //      title: " News update",
          //      text:
          //           "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //      img: "https://source.unsplash.com/user/erondu/1600x900"
          // },
          // {
          //      id: 3,
          //      title: " News update",
          //      text:
          //           "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international ",
          //      img: "https://source.unsplash.com/user/erondu/1600x900"
          // }
     ]);
     const [currentPage, setCurrentPage] = useState(1);
     const [loader, setLoader] = useState(false);
     const [postPerpage] = useState(6);

     const fetchEvents = async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          setLoader(true);
          const data = await res.json();
          console.log(data);
          setNewsItem(data);
          setLoader(false);
          console.log(newsItem);
     };

     const paginate = pageNumber => setCurrentPage(pageNumber);

     useEffect(() => {
          fetchEvents();
     }, []);

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
