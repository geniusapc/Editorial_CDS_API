import React, { useState, useEffect } from "react";
import EventList from "./EventList";

const Events = props => {
     const news = {
          //  {
          //                id: 1,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           },
          //           {
          //                id: 2,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           },
          //           {
          //                id: 3,
          //                title: " News update",
          //                text:
          //                     "Belize's latest commitment to ocean conservation is its new Fisheries Resources Bill, for which the country partnered with the Environmental Defense Fund (EDF), an international non-governmental organisation. The bill, which focuses on effective management solutions for overfishing, passed its first assessment by the",
          //                img: "https://source.unsplash.com/user/erondu/1600x900"
          //           }
     };

     const [newsItem, setNewsItem] = useState([]);

     useEffect(() => {
          // const fetchEvents = () => {
          //      fetch("https://jsonplaceholder.typicode.com/posts")
          //           .then(res => res.json())
          //           .then(data => {
          //                console.log(data);
          //                setNewsItem(data);
          //           });
          // };
          const fetchEvents = async () => {
               const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
               );
               const data = await res.json();
               console.log(data);
               return data;
          };
          fetchEvents();
     }, []);

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
                    {newsItem.map(news => (
                         <EventList
                              key={news.id}
                              title={news.title}
                              image={news.img}
                              text={news.text}
                         />
                    ))}
               </div>
          </>
     );
};

export default Events;
