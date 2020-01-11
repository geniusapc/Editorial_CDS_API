import React from 'react'


const Footer = props => {
     return (
          <div>
               <footer className={"footer  text-center"}>
                    <div className={"main__foot"}>
                         <div className={"main__foot-logo m-2"}>
                              <img src="http://res.cloudinary.com/cmcwebcode/image/upload/v1573994987/nysclogo_vneekm.jpg" alt=""/>
                              <h4>Editoral & Publicity Cds Groups saki,</h4>
                         </div>
                         <form className={"form"}>
                              <div className={"form__control"}>
                                   <input type="text" placeholder="example@gmail.com" />
                                   <input type="submit" value="Subscribe"/>
                              </div>
                         </form>
                    </div>

                    <div className={"social__icons"}>
                         <div className={"social__icons-box"}>
                              <p className={"primary"}>
                                   <i>follow us on</i>
                              </p>
                              <a href="#">
                                   
                              </a>
                              <a href="#">
                                 
                              </a>
                              <a href="#">
                                 
                              </a>
                         </div>
                         <address className={"m-1"}>Editoralcdsgroupsaki@gmail.com</address>
                    </div>

                    <cite className={"m-1"}>
                         <small>
                              made with
                              by cmc
                              <span className={"primary"}>WebCode</span> & prince
                              <span className={"primary"}>Arthur</span>
                         </small>
                    </cite>
                    <p>
                         <small className={"mt-1"}>
                              Editoral cds groupsaki &copy; 2019
                         </small>
                    </p>
               </footer>
           </div>
     )
}

export default Footer;
