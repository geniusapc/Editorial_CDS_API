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
                    <h4 className={"B ml-3 primary"}>EDITORIAL CDS GROUP</h4>
                    <NavbarToggler className={"toggle"} onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                         <Nav className="primary ml-auto" navbar>
                              <NavItem className="primary">
                                   <NavLink className="nav" href="/about-us">
                                        About
                                   </NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink href="/gallery">
                                        Our Gallery{" "}
                                   </NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink href="/contact-us">
                                        Contact Us{" "}
                                   </NavLink>
                              </NavItem>
                              <UncontrolledDropdown nav inNavbar>
                                   <DropdownToggle nav caret>
                                        Member
                                   </DropdownToggle>
                                   <DropdownMenu right>
                                        <Link to="/signup">
                                             <DropdownItem>
                                                  Register
                                             </DropdownItem>
                                        </Link>
                                        <Link to="/login">
                                             <DropdownItem>Login</DropdownItem>
                                        </Link>
                                        <DropdownItem divider />
                                        <DropdownItem>Admin</DropdownItem>
                                   </DropdownMenu>
                              </UncontrolledDropdown>
                         </Nav>
                    </Collapse>
               </Navbar>
          </div>
     );
};

export default NavbarMain;
