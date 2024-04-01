
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <ul className="navbar-nav">
    <li className="nav-link ">
         <Link to="/">Display Users</Link>
        </li>
      
        <li className="nav-link"> 
          <Link to="/create">Add Users</Link>
       </li>
     
    </ul>
 
</nav>
   
  );
};

export default Navbar;
