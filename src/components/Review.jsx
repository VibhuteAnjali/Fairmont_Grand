import { reviewData } from "../Data/ImgData";
import "../styles/Review.css";
export default function Review() {
  return (
    <div>
      <div className="heading">Review</div>
      <div className="review-Mainbox">
        {reviewData.map((review, i) => {
          return (
            <div className="box" key={i}>
              <div className="container">
                <div className="img-r">
                  <img src={review.img} alt="" />
                </div>
                <div>
                  <div className="star">
                    <img
                      src="https://img.icons8.com/?size=30&id=7856&format=png&color=ffc107"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/?size=30&id=7856&format=png&color=ffc107"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/?size=30&id=7856&format=png&color=ffc107"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/?size=30&id=7856&format=png&color=ffc107"
                      alt="star"
                    />
                  </div>
                  <div>
                    <p className="r-name">{review.name}</p>
                  </div>
                </div>
              </div>
              <p className="reviewdata">{review.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
