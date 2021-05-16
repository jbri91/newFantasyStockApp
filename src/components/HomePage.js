import React from "react";
import homepageCoinImage from "../images/homepageCoinImage.jpg";

function HomePage() {

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: "0px" }}>
          <h1>Fantasy Stock Application</h1>
          <h4
            style={{
              marginTop: "30px",
              wordWrap: "break-word",
              fontSize: "16px",
            }}
          >
            Welcome to where you can practice how to invest in the stock market
            before you risk your hard earned cash. 
          </h4>
          <img
            style={{ borderRadius: "50%", margin: "40px" }}
            src={homepageCoinImage}
            alt="Homepage Coins"
          />
          <h5 style={{ marginTop: "30px" }}>
            “Remember that the stock market is a manic depressive.” - Warren
            Buffet
          </h5>
          <a style={{color: 'black', fontSize: '20px'}} href="https://iexcloud.io">Data provided by IEX Cloud</a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
