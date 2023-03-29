import React from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="left_header">
          <Heading
            heading = "An inspiring design delivered to your inbox every morning"
            decription = "Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox"
            headingSmall = "Show me how it looks"
          />
          
          {/* <div>
            An inspiring design delivered to your inbox every morning
          </div> */}
          {/* <div>
            Our team scouts the internet for the best designs, 
            illustrations and art and delivers a truly inspiring one every day to your inbox
          </div> */}
            
          
          {/* <div>
            Show me how it looks
          </div> */}
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div className="right_header">
          <img src={require('./dweep.png')}></img>  
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
