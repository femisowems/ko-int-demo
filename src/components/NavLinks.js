import React, { useState } from "react";
import { Link } from "gatsby";

const NavLinks = () => {

  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link to="/">Welcome</Link>
      </li>
  
    </ul>
  );
};

export default NavLinks;
