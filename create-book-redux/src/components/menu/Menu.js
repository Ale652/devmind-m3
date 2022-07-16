import "./Menu.css";
import Box from '@mui/material/Box';

export default function Menu() {
  return (
<Box>
    <nav className="navMenu">
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <div className="dot"></div>
    </nav>
  </Box>
  );
}
