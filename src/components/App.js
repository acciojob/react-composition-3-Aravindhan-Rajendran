import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        Hover over this heading
        <Tooltip tooltipId="firstTooltip" text="This is a tooltip for the first div" />
      </h2>
      <p className="tooltip">
        Hover over this paragraph to see another tooltip
        <Tooltip tooltipId="secondTooltip" text="This is another tooltip for the second div" />
      </p>
    </div>
  );
}

export default App;
