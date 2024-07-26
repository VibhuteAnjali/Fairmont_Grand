import "./App.css";

import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import CheckBooking from "./components/CheckBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/BookingForm" element={<Form />} />
          <Route path="/CheckBooking" element={<CheckBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
