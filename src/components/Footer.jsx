import "../styles/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="textCenter">
          <div className="logo">Fairmont Grand</div>
          <div className="subtag">
            Experience Excellence: Where Luxury Meets Comfort at Every Turn
          </div>
        </div>
        <div className="form">
          <label htmlFor="">News Letter</label>
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="navigation">
        <div className="footer-flex-c">
          <a>Loyalty</a>
          <a>Contact Us</a>
          <a>Affiliate Programs</a>
          <div className="footer-flex">
            <a href="https://www.facebook.com/fairmontgranddelmar">
              <img
                src="https://img.icons8.com/?size=30&id=8818&format=png&color=FFFFFF"
                alt=""
              />
            </a>
            <a href="https://x.com/FairmontGDM?mx=2">
              <img
                src="https://img.icons8.com/?size=30&id=fJp7hepMryiw&format=png&color=FFFFFF"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/fairmontgranddelmar">
              <img
                src="https://img.icons8.com/?size=30&id=32309&format=png&color=FFFFFF"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="companyName">
        <svg
          role="img"
          aria-label="AccorHotels Home Page"
          aria-hidden="true"
          focusable="false"
          className="footer-logo-img english-logo"
          width="133"
          height="80"
          viewBox="0 0 133 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5931_258)">
            <path
              d="M74.7207 79.9673H56.2651L42.6939 50.6532C38.5374 52.9011 35.3819 56.7997 32.0868 60.8708C29.5087 64.056 26.8451 67.3468 23.5498 70.035C19.7145 73.1622 15.2563 75.931 9.68356 77.8203C7.15943 78.6672 2.86515 79.7748 1.25889 79.9377C0.570489 80.0028 0.111558 79.9702 0.0132153 79.7422C-0.0523464 79.5468 0.111558 79.4165 0.832736 79.0581C0.978574 78.9886 1.20539 78.887 1.49174 78.7589C2.81472 78.1666 5.40815 77.0055 7.15943 75.8007C9.81468 73.944 11.3226 71.9569 11.4537 70.4259C11.3199 69.9544 11.0314 69.3753 10.6843 68.6783C9.16054 65.619 6.50581 60.289 10.8309 51.8259C11.5951 50.3203 12.3169 48.9883 12.9836 47.758C13.9756 45.9274 14.8455 44.3221 15.5513 42.7051C16.8953 39.6105 17.8788 35.2455 18.2066 31.9881C18.2394 31.7926 18.2721 31.7926 18.3705 31.9229C20.9602 34.5289 30.9911 44.7573 29.516 54.9531C32.8596 53.6827 38.629 49.8063 41.2843 47.7541C41.9082 47.2711 42.4839 46.7849 43.0346 46.3199C44.9721 44.6837 46.5993 43.3096 48.9222 43.2588C50.4144 43.2405 51.1405 43.6337 51.8685 44.028C52.4358 44.3352 53.0044 44.6431 53.9377 44.7573C54.4622 44.8224 55.2489 44.7247 55.6423 44.5292C55.8062 44.4641 55.7734 44.2686 55.5111 44.2035C54.3108 43.9189 53.4851 43.3466 52.6608 42.7754C51.5041 41.9737 50.3503 41.1741 48.1682 41.1741C45.6526 41.1741 43.5081 42.9073 41.7765 44.3068C41.2066 44.7674 40.6814 45.1919 40.2025 45.5065L30.7288 25.8967C26.7951 17.6879 27.9753 11.7268 36.695 0L74.7207 79.9673Z"
              fill="white"
            ></path>
            <path
              d="M104.845 80H93.404C88.5853 80 86.1267 78.9408 84.3565 76.5908C82.4552 74.1084 82.4552 70.302 82.4552 66.7273V0.0327015H97.2066V68.8787C97.2066 74.3401 97.7966 78.2127 104.845 79.7683V80Z"
              fill="white"
            ></path>
            <path
              d="M121.559 80H133V79.7683C125.952 78.2127 125.362 74.3401 125.362 68.8787V0.0327015H110.611V66.7273C110.611 70.302 110.611 74.1084 112.512 76.5908C114.282 78.9408 116.741 80 121.559 80Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_5931_258">
              <rect width="133" height="80" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div>
          <h3>ALL.com app</h3> Elevate your Fairmont moments with Accor’s Live
          Limitless loyalty program. Download the ALL.com app to find your dream
          room at the best price.
        </div>
      </div>
    </div>
  );
}
