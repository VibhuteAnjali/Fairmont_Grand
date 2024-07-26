import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">Fairmont Grand</div>
      <div className="Nav-links">
        <Link to="/">Home</Link>
        <Link to="/#About">About</Link>
        <Link to="/Rooms">Rooms</Link>
        <Link to="/Booking">Booking</Link>
      </div>
    </div>
  );
}
