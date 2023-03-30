import React from "react";
import Heading from "./Heading";
import Menu from "./Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="left_header">

          <Heading
            heading="An inspiring design delivered to your inbox every morning"
            decription="Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox"
            headingSmall="Show me how it looks"
          />
          <div>
            <input type="text"></input>
            <button>Register Now</button>
          </div>
          <div>
            Free - No Spam - No Data Sharing
          </div>
        </div>
        <div className="right_header">
          <img src={require("./dweep.png")}></img>
        </div>
      </div>
      <div className="footer">
        <div className="left_footer">
          <Menu item="Prompt Generator"/>
          <Menu item="Dweep Daily"/>
          <Menu item="All Contributors"/>
          <Menu item="Your data on Dweep.io"/>
          <Menu item="Contribute to Dweep"/>
          
        </div>
        <div className="right_footer">
          Dweep.io
          Made with love in India
        </div>
      </div>
    </div>
  );
}

export default App;
