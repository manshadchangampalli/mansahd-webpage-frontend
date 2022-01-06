import React from "react";
import { Nav, NavItems, NavRoundBottom, NavRoundTop } from "./NavElements";

function NavBar() {
  return (
    <Nav>
      <NavRoundTop />
      <NavRoundBottom />
      <NavItems/>
    </Nav>
  );
}

export default NavBar;
