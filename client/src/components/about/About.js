import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../shared/loader/Loader";

const About = () => {
     const [about, setAbout] = useState("");
     const [loading, setLoading] = useState("");

     useEffect(() => {
          const getAbout = async () => {
               try {
                    setLoading(true);
                    const res = await axios.get("/api/about");
                    setAbout(res.data.about);
                    setLoading(false);
               } catch (error) {}
          };

          getAbout();
     }, []);
     return (
          <div className="about-page">
               <div className="clip-about"></div>
               <div className="">
                    <section className="p-3">
                         <h2 className="primary text-center">
                              About The Editorial Crew
                         </h2>
                         {loading ? (
                              <Loading />
                         ) : (
                              <p className="mt-5">{about}</p>
                         )}
                    </section>
               </div>
          </div>
     );
};

export default About;
