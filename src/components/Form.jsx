import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import { addBooking } from "../services/apiBooking";
import { addGuest } from "../services/apiGuest";
import "../styles/Form.css";
export default function Form() {
  // const zeroBaseUrl = `https://api-us.zerobounce.net/v2/validate?api_key=4662945b9ff246cbb04c61edf89f352c`;
  const zeroBaseUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=663976aeb4b7406cbe724db35229caa2`;
  const { register, handleSubmit, watch, reset } = useForm();
  const [cabins, setCabins] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [cabinPrice, setCabinPrice] = useState(null);
  const [guestId, setGuestId] = useState(null);
  const selectedCabinId = watch("cabin");

  const onSubmit = async (data) => {
    const {
      fullName,
      email,
      nationality,
      nationalID,
      startDate,
      endDate,
      numNights,
      noOfGuests,
      breakfast,
    } = data;

    const emailValidation = await checkEmail(email);
    if (emailValidation === "DELIVERABLE") {
      try {
        const guest = { fullName, email, nationalID, nationality };
        const guestResponse = await addGuest(guest);
        const newGuestId = guestResponse[0].id;

        setGuestId(newGuestId);

        const booking = {
          startDate,
          endDate,
          numNights: parseInt(numNights),
          numGuests: parseInt(noOfGuests),
          cabinPrice,
          status: "unconfirmed",
          hasBreakfast: breakfast || false,
          isPaid: false,
          totalPrice: cabinPrice,
          cabinId: parseInt(data.cabin),
          guestId: guestId || newGuestId,
        };

        const bookingResponse = await addBooking(booking);
        console.log("Booking added", bookingResponse);
        setMessage("Bookings Done succesfully! We will be waiting for you.");
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        reset();
      } catch (error) {
        console.error("Error adding booking:", error.message);
        setError("An error occurred while adding booking");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (emailValidation === "invalid") {
      setError("Email is invalid. Please enter valid email Id.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setError("Error validating email");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const validateCheckOutDate = (value) => {
    const startDate = watch("startDate");
    if (startDate && value && startDate > value) {
      setError("Check-out date must be after check-in date");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return "Check-out date must be after check-in date";
    }
    return true;
  };

  const checkEmail = async (email) => {
    try {
      const response = await fetch(`${zeroBaseUrl}&email=${email}`);
      const data = await response.json();
      console.log("Email Validation Response:", data);
      return data.deliverability;
    } catch (error) {
      console.error("Error checking email:", error);
      return "error";
    }
  };

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const response = await getCabins();
        console.log("API Response:", response);
        if (response && Array.isArray(response)) {
          setCabins(response);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching cabins:", error);
      }
    };
    fetchCabins();
  }, []);

  useEffect(() => {
    if (selectedCabinId) {
      const selectedCabin = cabins.find(
        (cabin) => cabin.id === parseInt(selectedCabinId)
      );
      if (selectedCabin) {
        setCabinPrice(selectedCabin.regularPrice);
      }
    }
  }, [selectedCabinId, cabins]);

  return (
    <div id="form">
      <div className="heading">To Experience The Luxury</div>
      <div className="subheading">Get your booking now</div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-flex">
          <div className="date-flex">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Philips Johns"
              {...register("fullName", { required: true, minLength: 5 })}
            />
          </div>
          <div className="date-flex">
            <label>Email</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="date-flex">
            <label>Nationality</label>
            <input
              type="text"
              placeholder="Indian"
              {...register("nationality", { required: true, minLength: 5 })}
            />
          </div>
          <div className="date-flex">
            <label>National ID</label>
            <input
              type="text"
              placeholder="879-abcd-789"
              {...register("nationalID", { required: true })}
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="date-flex">
            <label>Check In Date</label>
            <input
              type="date"
              placeholder="Check In Date"
              {...register("startDate", { required: true })}
            />
          </div>
          <div className="date-flex">
            <label>Check Out Date</label>
            <input
              type="date"
              placeholder="Check Out Date"
              {...register("endDate", {
                required: true,
                validate: validateCheckOutDate, // Custom validation
              })}
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="checkbox-div">
            <label htmlFor="breakfast" className="toggle">
              <span> Include Breakfast</span>
            </label>
            <div>
              <input
                type="checkbox"
                id="cbx-3"
                className="checkbox"
                {...register("breakfast")}
              />
            </div>
          </div>
          <div className="date-flex">
            <label>Number of Nights</label>
            <input
              type="number"
              name="numNights"
              placeholder="2"
              {...register("numNights", { required: true })}
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="date-flex">
            <label>No of Guests</label>
            <input
              type="number"
              name="noOfGuests"
              placeholder="2"
              {...register("noOfGuests", { required: true })}
            />
          </div>
          <div className="date-flex">
            <label>Choose Room</label>
            <select
              name="cabin"
              id="cabin"
              {...register("cabin", { required: true })}
            >
              {cabins
                .filter((item) => !item.Occupied)
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name} ({item.maxCapacity} member Capacity)
                  </option>
                ))}
            </select>
          </div>
        </div>
        <button className="checkButton" type="submit">
          Check
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
