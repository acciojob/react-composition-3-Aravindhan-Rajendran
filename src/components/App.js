import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip for the first div">
        <div className="tooltip-container">
          <h2>Hover over this div</h2>
          </Tooltip>
        </div>
      <Tooltip text="This is another tooltip for the second div">
        <div className="tooltip-container">
          <p>Hover over this div to see another tooltip</p>
          </Tooltip>
        </div>
    </div>
  );
}

export default App;
