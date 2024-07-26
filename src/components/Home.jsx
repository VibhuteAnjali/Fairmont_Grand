import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home" id="Home">
      <div className="tagline">
        <h1>The Best Luxury Hotel In California</h1>
        <p>Experience Excellence: Where Luxury Meets Comfort at Every Turn</p>
        <button className="ctc" onClick={() => navigate("/Booking")}>
          Book a Room Now
        </button>
      </div>
    </div>
  );
}
