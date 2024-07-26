import { useForm } from "react-hook-form";
import "../styles/checkBooking.css";
import { checkBooking, findBooking, findCabin } from "../services/apiBooking";
import { useState } from "react";
export default function CheckBooking() {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState([]);
  const [booking, setBooking] = useState([]);
  const [cabin, setCabin] = useState([]);
  const [detail, setDetails] = useState(false);

  function formatDate(isoString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
  }

  async function onSubmit(data) {
    const { email } = data;
    console.log(email);
    await checkBooking(email).then((data) => {
      setInfo(data[0]);
      console.log(data[0], "info");
      findBooking(data[0].id).then((data2) => {
        setBooking(data2[0]);
        findCabin(data2[0].cabinId).then((data3) => {
          console.log(data3, "cabin");
          setCabin(data3[0]);
          setDetails(true);
        });
      });
    });

    // console.log(info.id);
    console.log("booking", booking);
  }
  return (
    <div className="existingBooking">
      <p className="heading">Existing Booking</p>

      {detail ? (
        <div className="margin-1">
          <div className="flex-content">
            <p>
              <span>Status: </span>
              {booking.status}
            </p>
          </div>
          <div className="flex-content">
            <p>
              <span>Name: </span>
              {info.fullName}
            </p>
            <p>
              <span>Email:</span> {info.email}
            </p>
          </div>
          <div className="flex-content">
            <p>
              <span>CheckIn Date:</span> {formatDate(booking.startDate)}
            </p>
            <p>
              <span>CheckOut Date:</span> {formatDate(booking.endDate)}
            </p>
          </div>
          <div className="flex-content">
            <p>
              <span> Room: </span>
              {cabin.name}
            </p>
            <p>
              <span>Total Price:</span> {booking.totalPrice}
            </p>
          </div>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="date-flex">
            <label>Registered Email</label>
            <input
              type="text"
              placeholder="abc@gmail.com"
              {...register("email", { required: true, minLength: 5 })}
            />
          </div>
          <button className="ctc ext">Check</button>
        </form>
      )}
      <p className="greet">Thankyou for choosing Us!</p>
    </div>
  );
}
