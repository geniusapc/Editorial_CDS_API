import React, { useState } from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import {
     Collapse,
     Navbar,
     NavbarToggler,
     Nav,
     NavItem,
     NavLink,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem
} from "reactstrap";

const NavbarMain = props => {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);

     return (
          <div className={"py-2"}>
               <Navbar color="white" light expand="md">
                    <Logo></Logo>
                    <h4 className={" ml-3 primary"}>EDITORIAL CDS GROUP</h4>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                         <Nav className=" text-primary primary ml-auto" navbar>
                              <NavItem className=" text-primary">
                                   <NavLink className="nav" href="/about-us">
                                        About
                                   </NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink className="nav" href="/gallery">
                                        Our Gallery{" "}
                                   </NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink className="nav" href="/contact-us">
                                        Contact Us{" "}
                                   </NavLink>
                              </NavItem>
                              <UncontrolledDropdown nav inNavbar>
                                   <DropdownToggle nav caret className="nav">
                                        Member
                                   </DropdownToggle>
                                   <DropdownMenu right>
                                        <Link className="nav" to="/signup">
                                             <DropdownItem>
                                                  Register
                                             </DropdownItem>
                                        </Link>
                                        <Link className="nav" to="/login">
                                             <DropdownItem>Login</DropdownItem>
                                        </Link>
                                        <DropdownItem divider />
                                   </DropdownMenu>
                              </UncontrolledDropdown>
                         </Nav>
                    </Collapse>
               </Navbar>
          </div>
     );
};

export default NavbarMain;
