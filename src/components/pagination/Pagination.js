import React from "react";
import PaginationItem from "reactstrap/lib/PaginationItem";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
     const pageNumbers = [];

     for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
          pageNumbers.push(i);
     }
     return (
          <nav className="pagination-wrapper">
               <h5 className="text-white ml-5 font-italic">view news page</h5>
               <ul className=" page-grid">
                    {pageNumbers.map(number => (
                         <li key={number}>
                              <a
                                   onClick={() => paginate(number)}
                                   href=""
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
