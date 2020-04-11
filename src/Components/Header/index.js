import React from "react" ;
import "./style.css";

function Header (){
    return (
        <div className = "header">
            <h2>Employee Directory</h2>
            <p>Click on carrats to filter by heading or use the search box to narrow the results</p>
        </div>
    );
}

export default Header;