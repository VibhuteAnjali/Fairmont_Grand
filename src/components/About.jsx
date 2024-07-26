import { useState } from "react";
import "../styles/About.css";
export default function About() {
  const [count, setCount] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/d6/e8/66/d6e8660f5cc2a33ecf9145ce035eae99.jpg",
    "https://i.pinimg.com/564x/5e/5e/cc/5e5ecc3f18bdd0a0f77721a56c1427d2.jpg",
    "https://i.pinimg.com/564x/a6/cc/bd/a6ccbd66bcc787013afd327d470dfd65.jpg",
  ];

  setTimeout(() => {
    if (count < 2) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }, 2000);
  return (
    <div className="about-section" id="About">
      <div className="images">
        <img src={images[count]} alt="aboutImg" />
      </div>
      <div className="text">
        <h2>Welcome to Fairmont Grand Del Mar</h2>
        <p>
          Imbued with the charm and elegance of a Mediterranean estate, Fairmont
          Grand Del Mar in San Diego sits cradled among the undulating hills of
          the Carmel Valley. It features a prize-winning private golf course and
          a lavish 5-star spa with four heated pools and a menu of soothing,
          indulgent treatments. The exquisite dining options at one of the best
          resort hotels in San Diego include Addison, our Michelin-starred
          restaurant. And because this is Fairmont, you can expect service to be
          attentive, thoughtful and sincere.
        </p>
      </div>
    </div>
  );
}
