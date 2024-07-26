import { Activities as activities } from "../Data/ImgData";
import { Activities2 as activities2 } from "../Data/ImgData";
import "../styles/Activities.css";
export default function Activities() {
  return (
    <div>
      <div className="heading">Activities</div>
      <div className="crousel-flex">
        <div className="crousel">
          {activities.map((item, i) => {
            return (
              <div key={i}>
                {i < 3 && (
                  <img src={item.img} alt=".." className="crousel-img" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="crousel-flex">
        <div className="crousel">
          {activities2.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.img} alt=".." className="crousel-img2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
