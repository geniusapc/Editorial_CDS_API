import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarMain from "../shared/header/navbar/NavbarMain";
import Footer from "../shared/footer/Footer";
import Home from "../components/home/Home";
import Gallery from "../components/gallery/Gallery";

const Layouts = () => {
     return (
          <div>
               <NavbarMain />
               <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/gallery" exact component={Gallery} />
               </Router>
               <Footer />
          </div>
     );
};

export default Layouts;
