import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/eds.svg";

const Logo = props => {
     return (
          <div>
               <Link to="/">
                    <img src={logo} alt="editorial logo" />
               </Link>
          </div>
     );
};

export default Logo;
