import React, { useState } from 'react';
import Logo from '../logo/Logo';
import {
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     NavItem,
     NavLink,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem,
     NavbarText
} from 'reactstrap';


const NavbarMain = (props) => {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);

     return (
          <div>
               <Navbar color="white" light expand="md">
                    <Logo ></Logo>
                    <h4 className={'green ml-3'}>Editorial Cds group</h4>
                    <NavbarToggler className={'border'} onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                         <Nav className="ml-auto" navbar>
                              <NavItem>
                                   <NavLink href="/">About</NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink href="/">Our Gallery </NavLink>
                              </NavItem>
                              <NavItem>
                                   <NavLink href="/">Contact Us </NavLink>
                              </NavItem>
                              <UncontrolledDropdown nav inNavbar>
                                   <DropdownToggle nav caret>
                                       Member
                                   </DropdownToggle>
                                   <DropdownMenu right>
                                        <DropdownItem>
                                           Register
                                         </DropdownItem>
                                        <DropdownItem>
                                             Login
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Admin
                                         </DropdownItem>
                                   </DropdownMenu>
                              </UncontrolledDropdown>
                         </Nav>
                    </Collapse>
               </Navbar>
          </div>
     );
}

export default NavbarMain;