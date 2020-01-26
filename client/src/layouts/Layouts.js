import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarMain from "../shared/header/navbar/NavbarMain";
import EventProvider from "../shared/contextapi/EventProvider";
import Footer from "../shared/footer/Footer";
import Home from "../components/home/Home";
import Gallery from "../components/gallery/Gallery";
import ErrorPage from "./ErrorPage";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Admin from "../components/admin/Admin";
const Layouts = () => {
     return (
          <EventProvider>
               <div>
                    <Router>
                         <NavbarMain />
                         <Switch>
                              <Route path="/" exact component={Home} />
                              <Route
                                   path="/gallery"
                                   exact
                                   component={Gallery}
                              />
                              <Route path="/login" exact component={Login} />
                              <Route
                                   path="/signup"
                                   exact
                                   component={Register}
                              />
                              <Route
                                   path="/contact-us"
                                   exact
                                   component={Contact}
                              />
                              <Route
                                   path="/admindashboard"
                                   exact
                                   component={Admin}
                              />
                              <Route path="/about-us" exact component={About} />
                              <Route component={ErrorPage} />
                         </Switch>
                    </Router>
                    <Footer />
               </div>
          </EventProvider>
     );
};

export default Layouts;
