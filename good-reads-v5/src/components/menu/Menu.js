import "./Menu.css";
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


const Menu = (props) => {

 const loginState = useSelector((state) => state.login);

    const linkStyle = {

        color:"#f6f4e6",
        textDecoration:"none",
        fontSize:"1.2em",
        textTransform:"uppercase",
        fontWeight:"500",
        display:"inline-block",
        width:"150px",
        WebkitTransition:"all 0.2s ease-in-out",
        transition:"all 0.2s ease-in-out"
    };

  return (
      <div className="navMenu">
          <Link style={linkStyle} to="/Dashboard">
              Dashboard
          </Link>
          {(loginState.role == "ADMIN" || loginState.role == "AUTHOR" ) && <Link style={linkStyle} to="/addBook">
              Add Book
          </Link> }
          <Link style={linkStyle} to="/profile">
              Profile
          </Link>
      </div>
  );
};

export default Menu;