import React, { useState } from "react";
import "./styles.css";
import { FaBitcoin, FaGift } from "react-icons/fa";

const LivenRewards = () => {
  const [isGift, setIsGift] = useState(false);

  // Handle radio button toggle
  const handleGiftToggle = () => {
    setIsGift(!isGift);
  };

  return (
    <div className="liven-rewards">
      {/* Logo */}
      <div className="header">
        <div>
          <a href="https://liven.love/" target="_blank" rel="noopener noreferrer">
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2053%2024%22%3E%3Cg%20transform%3D%22translate(0%200.569)%22%20id%3D%22ss9910606181_1%22%3E%3Cpath%20d%3D%22M%200%20-0.284%20L%2053%20-0.284%20L%2053%2023.245%20L%200%2023.245%20Z%22%20fill%3D%22transparent%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%205.631%206.487%20C%205.621%208.98%209.309%208.998%209.32%206.504%20C%209.331%204.011%205.642%203.994%205.631%206.488%20Z%20M%200.081%204.884%20L%200%2023.228%20L%203.101%2023.242%20L%203.181%204.898%20L%200.081%204.884%20Z%20M%2020.042%2014.576%20L%2018.078%2019.963%20L%2016.136%2014.507%20L%2014.395%2010.23%20L%2010.953%2010.214%20L%2016.355%2023.229%20L%2019.77%2023.245%20L%2025.263%2010.278%20L%2021.821%2010.264%20L%2020.042%2014.577%20Z%20M%205.898%2010.212%20L%205.84%2023.256%20L%208.966%2023.27%20L%209.023%2010.226%20Z%20M%2047.663%2010.122%20C%2046.074%2010.114%2044.79%2010.764%2043.504%2012.044%20L%2043.306%2010.214%20L%2040.457%2010.214%20L%2040.457%2023.245%20L%2043.556%2023.245%20L%2043.586%2016.637%20C%2043.595%2014.669%2044.908%2013.022%2046.829%2013.03%20C%2048.828%2013.04%2049.871%2014.541%2049.863%2016.509%20L%2049.863%2023.249%20L%2052.988%2023.263%20L%2052.988%2016.497%20C%2053.006%2012.43%2050.634%2010.136%2047.663%2010.122%20Z%20M%2032.052%209.852%20C%2028.032%209.834%2025.455%2012.598%2025.441%2016.452%20C%2025.422%2020.515%2027.946%2023.224%2032.219%2023.245%20C%2034.103%2023.253%2036.243%2022.594%2037.557%2021.214%20L%2035.604%2019.224%20C%2034.899%2019.968%2033.411%2020.397%2032.281%2020.392%20C%2030.12%2020.381%2028.793%2019.246%2028.599%2017.675%20L%2038.275%2017.723%20C%2038.775%2012.506%2036.198%209.87%2032.051%209.852%20Z%20M%2028.662%2015.079%20C%2029.121%2013.437%2030.484%2012.62%2032.14%2012.629%20C%2033.899%2012.637%2035.154%2013.464%2035.346%2015.11%20Z%20M%2032.413%205.979%20C%2032.208%206.139%2031.922%206.139%2031.717%205.979%20C%2031.297%205.682%2029.64%203.819%2029.681%202.136%20C%2029.681%200.8%2030.748%20-0.284%2032.065%20-0.284%20C%2033.382%20-0.284%2034.449%200.8%2034.449%202.136%20C%2034.49%203.818%2032.833%205.682%2032.413%205.979%20Z%20M%2030.013%206.91%20C%2030.079%207.164%2029.972%207.432%2029.75%207.57%20C%2029.323%207.856%2027.013%208.724%2025.508%208.05%20C%2024.3%207.545%2023.723%206.124%2024.221%204.874%20C%2024.719%203.625%2026.101%203.022%2027.31%203.527%20C%2028.845%204.124%2029.903%206.4%2030.013%206.91%20Z%20M%2034.091%206.91%20C%2034.025%207.164%2034.132%207.432%2034.355%207.57%20C%2034.781%207.856%2037.091%208.724%2038.596%208.05%20C%2039.804%207.545%2040.381%206.124%2039.882%204.874%20C%2039.386%203.625%2038.002%203.022%2036.795%203.527%20C%2035.259%204.124%2034.201%206.4%2034.092%206.91%20Z%22%20fill%3D%22rgb(255%2C60%2C110)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Liven Logo"
              className="logo"
            />
          </a>
        </div>

        <div>
          {/* Get App Button */}
          <a href="https://app.liven.com.au/" target="_blank" rel="noopener noreferrer">
            <button className="get-app-btn">Get App</button>
          </a>
        </div>
      </div>

      <div className="headings">
        <h1>San Dollars</h1>
        <p>Pay now, eat more later! Earn a bonus whne you buy a food upfront. Tap now to purchase</p>
      </div>

      {/* Radio Button for Purchase as Gift */}
      <div className="purchase-gift-wrapper">
        <div className="gift-toggle-box">
          <div className="gift-toggle-content">
            {/* Gift Icon and Text */}
            <FaGift className="gift-icon" />
            <span className="gift-text">Purchase as gift</span>
          </div>

          {/* Toggle Switch */}
          <label className="switch">
            <input type="checkbox" checked={isGift} onChange={handleGiftToggle} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/* Conditional Rendering based on radio button state */}
      <div className={`cards-container`}>
        {/* Each Card */}
        {!isGift && 
        <a href="https://liven.love/" target="_blank" rel="noopener noreferrer" className="card">
          <div className={`card-content ${isGift ? "gift-mode" : ""}`}>
            <div style={{width : 50}}>
              <div>Buy</div>
              <div>$50</div>
            </div>
            <div>
              <FaBitcoin className="bit-icon" />
            </div>
            <div>
              <div>Bonus</div>
              <div>$5</div>
            </div>
          </div>
        </a>
        }
        <a href="https://liven.love/" target="_blank" rel="noopener noreferrer" className="card">
            <div className={`card-content ${isGift ? "gift-mode" : ""}`}>
              <div style={{width : 50}}>
                <div>Buy</div>
                <div>$100</div>
              </div>
              <div>
                <FaBitcoin className="bit-icon" />
              </div>
              <div>
                <div>Bonus</div>
                <div>$15</div>
              </div>
            </div>
        </a>
        <a href="https://liven.love/" target="_blank" rel="noopener noreferrer" className="card">
            <div className={`card-content ${isGift ? "gift-mode" : ""}`}>
              <div style={{width : 50}}>
                <div>Buy</div>
                <div>$250</div>
              </div>
              <div>
                <FaBitcoin className="bit-icon" />
              </div>
              <div>
                <div>Bonus</div>
                <div>$50</div>
              </div>
          </div>
        </a>
        <a href="https://liven.love/" target="_blank" rel="noopener noreferrer" className="card">
            <div className={`card-content ${isGift ? "gift-mode" : ""}`}>
              <div style={{width : 50}}>
                <div>Buy</div>
                <div>$500</div>
              </div>
              <div>
                <FaBitcoin className="bit-icon" />
              </div>
              <div>
                <div>Bonus</div>
                <div>$125</div>
              </div>
            </div>
        </a>
      </div>
    </div>
  );
};

export default LivenRewards;
