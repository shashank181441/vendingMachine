import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
 return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    {/* <img src="" alt="Cart" /> */}
    <Link to="/cart"><ShoppingCart /></Link>
  </div>
</nav> 

 );
}

export default Navbar;
