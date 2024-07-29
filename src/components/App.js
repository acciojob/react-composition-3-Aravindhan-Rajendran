import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
              <h2>Hover over this div</h2>
      <Tooltip tooltipId="firstTooltip" text="This is a tooltip for the first div">
        <div className="tooltip">
        </div>
      </Tooltip>
              <p>Hover over this div to see another tooltip</p>
      <Tooltip tooltipId="secondTooltip" text="This is another tooltip for the second div">
        <div className="tooltip">
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
