import React from "react";
import About from "./About";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Admin = () => {
     return (
          <div className="form-top">
               <div className="container">
                    <h2 className="primary text-center my-4">
                         ADMIN DASHBOARD
                    </h2>
                    <div>
                         <About />
                         <Gallery />
                         <Events />
                    </div>
               </div>
          </div>
     );
};

export default Admin;
