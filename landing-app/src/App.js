import React from "react";
import Heading from "./Heading";
import Menu from "./Menu";
import Icons from "./Icons"
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
          <div className="inputArea">
            <input type="text" placeholder="Your e-mail address"></input>
            <button>Register Now</button>
          </div>
          <div className="tagline">
            Free - No Spam - No Data Sharing
          </div>
        </div>
        <div className="right_header">
          <img className="man" src={require("./assets/dweep.png")}></img>
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
          <div>Dweep.io</div>
          <div>Made with love in India</div>
          <div className="svglogos">
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3513 4.43573H5.05405C4.54655 4.43573 4.13513 4.81937 4.13513 5.29261V23.2871C4.13513 23.7603 4.54655 24.144 5.05405 24.144H24.3513C24.8589 24.144 25.2703 23.7603 25.2703 23.2871V5.29261C25.2703 4.81937 24.8589 4.43573 24.3513 4.43573Z" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.2433 13.4331V19.4313" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.64865 13.4331V19.4313" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.2433 16.4322C14.2433 15.6368 14.5821 14.874 15.1853 14.3115C15.7884 13.7491 16.6065 13.4331 17.4595 13.4331C18.3125 13.4331 19.1305 13.7491 19.7337 14.3115C20.3368 14.874 20.6757 15.6368 20.6757 16.4322V19.4313" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.64866 10.8624C10.6637 10.8624 11.4865 10.0951 11.4865 9.14863C11.4865 8.20215 10.6637 7.43488 9.64866 7.43488C8.63365 7.43488 7.81082 8.20215 7.81082 9.14863C7.81082 10.0951 8.63365 10.8624 9.64866 10.8624Z" fill="#FFCD9E"/>
            </svg>

            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_336)">
            <path d="M17.2973 17.9317C19.4542 17.9317 21.2027 16.3012 21.2027 14.2899C21.2027 12.2787 19.4542 10.6482 17.2973 10.6482C15.1404 10.6482 13.3919 12.2787 13.3919 14.2899C13.3919 16.3012 15.1404 17.9317 17.2973 17.9317Z" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.8108 4.00732H11.7838C8.73878 4.00732 6.27029 6.30915 6.27029 9.1486V19.4312C6.27029 22.2706 8.73878 24.5724 11.7838 24.5724H22.8108C25.8559 24.5724 28.3243 22.2706 28.3243 19.4312V9.1486C28.3243 6.30915 25.8559 4.00732 22.8108 4.00732Z" stroke="#FFCD9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.2703 10.434C24.2853 10.434 25.1081 9.66671 25.1081 8.72023C25.1081 7.77375 24.2853 7.00647 23.2703 7.00647C22.2553 7.00647 21.4324 7.77375 21.4324 8.72023C21.4324 9.66671 22.2553 10.434 23.2703 10.434Z" fill="#FFCD9E"/>
            </g>
            <defs>
            <filter id="filter0_d_3_336" x="0.770294" y="2.50732" width="33.054" height="31.5651" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_336"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_336" result="shape"/>
            </filter>
            </defs>
            </svg>

          </div>

          <br></br>
          <div>hello@dweep.io</div>
        </div>
      </div>
    </div>
  );
}

export default App;
