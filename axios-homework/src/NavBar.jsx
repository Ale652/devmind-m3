import React from "react";
import {Link, useRoutes} from "react-router-dom";
 
const NavBar = (props) => {
    const linkStyle = {
        border: "1px solid #aaaaaa",
        padding: "4px",
        borderRadius: "4px",
        marginLeft: "4px",
        marginRight: "4px",
    };
    return (
        <div style={{padding: "8px"}}>
            <Link style={linkStyle} to="/home">
                Home
            </Link>
            <Link style={linkStyle} to="/repos">
                Repos
            </Link>
            <Link style={linkStyle} to="/repos/{repositoryId}">
                Repos Details
            </Link>
            <Link style={linkStyle} to="/posts">
                Posts
            </Link>
            {/* <Link style={linkStyle} to="/posts/add">
                Add Posts
            </Link> */}


            
        </div>
    );
};
 
export default NavBar;

