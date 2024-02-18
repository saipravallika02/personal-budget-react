import React from 'react';
import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <nav
      role="navigation"
      arial-label="Main menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      >
        <ul>
            <li><Link itemprop="url" to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
