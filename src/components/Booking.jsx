import { Link } from "react-router-dom";
import "../styles/Booking.css";
export default function Booking() {
  return (
    <div className="bookingContainer">
      <div className="booking">
        <Link to="/CheckBooking">
          <p>Check Existing Booking</p>
        </Link>
      </div>
      <div className="booking">
        <Link to="/BookingForm">
          <p>Make a Booking</p>
        </Link>
      </div>
    </div>
  );
}
