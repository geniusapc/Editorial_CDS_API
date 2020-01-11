import React from 'react'
import NavbarMain from '../shared/header/navbar/NavbarMain';
import Footer from '../shared/footer/Footer';
import LandingPage from '../components/home/landingpage/LandingPage';
import Events from '../components/home/newspage/Events';
import ArticleList from '../components/home/newspage/ArticlesList';
import Profiles from '../components/home/profile/Profiles';

const Layouts = () => {
     return (
          <div>
               <NavbarMain />
               <LandingPage />
               <main className="bg-primary">
                 <Events/>
                 <ArticleList/>
               </main>
               <Profiles/>
               <Footer/>
          </div> 
     )
}

export default Layouts;
