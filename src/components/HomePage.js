import React from "react";
import homepageCoinImage from "../images/homepageCoinImage.jpg";
import NavigationBar from "./NavigationBar";


function HomePage() {
  return (
    <div style={{ marginTop: '0px'}}>
        <NavigationBar />
      <h1>Fantasy Stock Application</h1>
      <h4 style={{ wordWrap: "break-word" }}>
        Welcome to where you can practice how to invest in the stock market
        before you risk your hard earned money.
      </h4>
      <img
        style={{ borderRadius: "50%", margin: '100px' }}
        src={homepageCoinImage}
        alt="Homepage Coins"
      />
      <h5>
        “Remember that the stock market is a manic depressive.” - Warren Buffet
      </h5>
    </div>
  );
}

export default HomePage;
