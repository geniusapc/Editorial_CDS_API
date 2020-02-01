import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
     let pageNumbers = [];

     for (let n = 1; n < Math.ceil(totalPosts / postPerPage); n++) {
          pageNumbers.push(n);
          // console.log(n);
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
