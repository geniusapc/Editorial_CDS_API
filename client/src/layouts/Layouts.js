import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Loader from '../shared/loader/Loader';

/**
 * *All components Routes
 */

import NavbarMain from "../shared/header/navbar/NavbarMain";
import Footer from "../shared/footer/Footer";
import Home from "../components/home/Home";
import ErrorPage from './ErrorPage';
const Gallery = lazy(() => import("../components/gallery/Gallery"));
// const ErrorPage = lazy(()=> import("./ErrorPage"));
const Login = lazy(() => import("../components/login/Login"));
const Register = lazy(() => import("../components/register/Register"));
const Contact = lazy(() => import("../components/contact/Contact"));
const About = lazy(() => import("../components/about/About"));
const NewsPage = lazy(() => import("../components/readnewspage/Readnews"));


//*************************** *//
//***********ADMIN************* //
//***********COMPS************** //
//***************************** //
const Admin = lazy(() => import("../components/admin/Admin"));
const AdminEvent = lazy(() => import("../components/admin/adminList/EventList"));
const AdminGallery = lazy(() => import("../components/admin/adminList/GalleryList"));
const UserList = lazy(() => import("../components/admin/adminList/UserList"));
const Leaders = lazy(() => import("../components/admin/adminList/LeadersProfile"));
const PrivateRoute = lazy(() => import("../shared/PrivateRoute"));

const LoaderSpinner =()=>(
     <div className="loader-ball" >
          <div> 
               <Loader/>
          </div>
     </div>
)

const Layouts = () => {
     return (
          <Router>
               <div>
                    <NavbarMain />
                    <Switch>
                         <Route path="/" exact component={Home} />
                         <Suspense fallback={LoaderSpinner}>
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
                         </Suspense>

                    </Switch>
                    {/* <Route exact to="/page-404" component={ErrorPage} />
                    <Redirect to="/page-404" /> */}
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
