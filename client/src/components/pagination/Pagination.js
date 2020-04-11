import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ totalPosts, paginate }) => {
    const [active, isActive] = useState(false);
    let pageNumbers = [];

    for (let n = 1; n < Math.ceil(totalPosts / 2); n++) {
        pageNumbers.push(n);
    }
    return (
        <nav className="pagination-wrapper text-center">
            <ul className=" page-grid mx-5">
                {pageNumbers.map(number => (
                    <li key={number} className="round">
                        <span
                            href="#"
                            onClick={() => {
                                paginate(number);
                                isActive(true);
                            }}
                            className={active ? "active-link" : ""}
                        >
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
