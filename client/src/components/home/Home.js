import React from "react";
import LandingPage from "./landingpage/LandingPage";
import Events from "./newspage/Events";
import Articles from "./newspage/ArticlesList";
import Profile from "./profile/Profiles";

export const Home = () => {
     return (
          <div className="home">
               <LandingPage />
               <main className="cover-main">
                    <Events />
               </main>
               <Articles />
               <Profile />
          </div>
     );
};

export default Home;
