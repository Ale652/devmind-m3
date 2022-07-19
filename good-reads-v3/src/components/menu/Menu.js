import "./Menu.css";
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

// export default function Menu() {
//   return (
// <Box>
//     <nav className="navMenu">
//       <a href="#">Home</a>
//       <a href="#">Blog</a>
//       <a href="#">Work</a>
//       <a href="#">About</a>
//       <div className="dot"></div>
//     </nav>
//   </Box>
//   );
// }

const Menu = (props) => {

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
          <Link style={linkStyle} to="/addBook">
              Add Book
          </Link>
          <Link style={linkStyle} to="/profile">
              Profile
          </Link>
          <Link style={linkStyle} to="/register">
              Register
          </Link>
      </div>
  );
};

export default Menu;