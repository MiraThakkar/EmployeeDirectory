import React from "react";
import "./style.css";
import Search from "../SearchForm"

// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <Search onChange = {props.handleInputChange}>
        </Search>
    
    </nav>
  );
}

export default Navbar;
