import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip for the first div">
        <div className="tooltip">
          <h2>Hover over this div</h2>
        </div>
      </Tooltip>
      <Tooltip text="This is another tooltip for the second div">
        <div className="tooltip">
          <p>Hover over this div to see another tooltip</p>
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
