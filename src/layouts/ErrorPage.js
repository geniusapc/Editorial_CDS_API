import React from "react";
import image from "../images/errorpage.svg";

const ErrorPage = props => {
     return (
          <div className="error-page container">
               <main>
                    <div>
                         <a href="/" className="btn-primary btn mt-5">
                              Go back to Home
                         </a>
                         <img
                              src={image}
                              className="img-fluid"
                              alt=""
                              // height="500"
                              // width="400"
                         />
                         <h2 className="primary text-center mb-4">
                              Oops page not found
                         </h2>
                    </div>
               </main>
          </div>
     );
};

export default ErrorPage;
