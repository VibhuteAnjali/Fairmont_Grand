import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";

import "../styles/Rooms.css";

export default function Rooms() {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const data = await getCabins();
        setCabins(data);
        console.log("cabins", data);
      } catch (error) {
        console.error("Error fetching cabins:", error);
      }
    };

    fetchCabins();
  }, []);

  return (
    <div>
      <div className="heading">Rooms</div>
      <div className="rooms-container">
        {cabins.map((item) => (
          <div key={item.id} className="room-item">
            <div className="room-flex">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="infoRoom">
              <p className="roomName">{item.name}</p>
              <p className="description">{item.description}</p>
              <p className="roomName">
                Price: ${item.regularPrice}/-{" "}
                {item.discount > 0 && (
                  <p className="discount">{item.discount}%Off</p>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
