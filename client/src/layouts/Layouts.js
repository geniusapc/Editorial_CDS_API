import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarMain from "../shared/header/navbar/NavbarMain";
import Footer from "../shared/footer/Footer";
import Home from "../components/home/Home";
import Gallery from "../components/gallery/Gallery";
import ErrorPage from "./ErrorPage";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import NewsPage from "../components/readnewspage/Readnews";

//***********ADMIN COMPS ******** *//
import Admin from "../components/admin/Admin";
import AdminEvent from "../components/admin/adminList/EventList";
import AdminGallery from "../components/admin/adminList/GalleryList";
import UserList from "../components/admin/adminList/UserList";
import Leaders from "../components/admin/adminList/LeadersProfile";
import PrivateRoute from "../shared/PrivateRoute";

const Layouts = () => {
     return (
          <Router>
               <div>
                    <NavbarMain />
                    <Switch>
                         <Route path="/" exact component={Home} />
                         <Route path="/gallery" exact component={Gallery} />
                         <Route path="/login" exact component={Login} />
                         <Route path="/signup" exact component={Register} />

                         <Route path="/about-us" exact component={About} />
                         <Route
                              path="/all-events-posted"
                              exact
                              component={AdminEvent}
                         />
                         <Route
                              path="/all-galleries-posted"
                              exact
                              component={AdminGallery}
                         />
                         <Route path="/leaders" exact component={Leaders} />
                         <Route path="/all-users" exact component={UserList} />
                         <Route path="/news/:id" exact component={NewsPage} />
                         <Route path="/contact-us" exact component={Contact} />

                         <PrivateRoute
                              exact
                              path="/admin-dashboard"
                              component={Admin}
                         />
                         <Route component={ErrorPage} />
                    </Switch>

                    <Footer />
               </div>
          </Router>
     );
};

// <Route
// path="/admin-dashboard"
// exact
// component={Admin}
// />

export default Layouts;
