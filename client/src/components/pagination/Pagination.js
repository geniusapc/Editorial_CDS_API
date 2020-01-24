import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
     const pageNumbers = [];

     for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
          return pageNumbers.push(i);
          // console.log(i);
     }

     // console.log(pageNumbers);
     return (
          <nav className="pagination-wrapper">
               <h5 className="text-white ml-5 font-italic">view news page</h5>
               <ul className=" page-grid">
                    {pageNumbers.map(number => (
                         <li key={number} className="">
                              <a
                                   href="www.xnklaxkja.com"
                                   onClick={() => paginate(number)}
                                   className="page-link"
                              >
                                   {number}
                              </a>
                         </li>
                    ))}
               </ul>
          </nav>
     );
};

export default Pagination;
