import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <div className="tooltip">
        <h2>Hover over this heading</h2>
        <Tooltip tooltipId="firstTooltip" text="This is a tooltip for the first div" />
      </div>
      <div className="tooltip">
        <p>Hover over this paragraph to see another tooltip</p>
        <Tooltip tooltipId="secondTooltip" text="This is another tooltip for the second div" />
      </div>
    </div>
  );
}

export default App;
