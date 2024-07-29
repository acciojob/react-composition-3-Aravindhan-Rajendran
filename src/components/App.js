import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        Hover over me
        <Tooltip tooltipId="firstTooltip" text="This is a tooltip" />
      </h2>
      <p className="tooltip">
        Hover over me to see another tooltip
        <Tooltip tooltipId="secondTooltip" text="This is another tooltip" />
      </p>
    </div>
  );
}

export default App;
