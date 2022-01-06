import React from "react";
import { Nav, NavItem, NavItems, NavRoundBottom, NavRoundTop } from "./NavElements";
import HomeImg from '../../Assets/images/navImages/Home.png'
import ProjectImg from '../../Assets/images/navImages/Projects.png'
import CodeImg from '../../Assets/images/navImages/code.png'
import Contact from '../../Assets/images/navImages/contact.png'

function NavBar() {
  return (
    <Nav>
      <NavRoundTop />
      <NavRoundBottom />
      <NavItems>
          <NavItem>
            <img src={HomeImg} alt="" />
          </NavItem>
          <NavItem>
            <img src={ProjectImg} alt="" />
          </NavItem>
          <NavItem>
            <img src={CodeImg} alt="" />
          </NavItem>
          <NavItem>
            <img src={Contact} alt="" />
          </NavItem>
      </NavItems>
    </Nav>
  );
}

export default NavBar;
