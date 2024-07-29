import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip tooltipId="firstTooltip" text="This is a tooltip for the first div">
        <h2>Hover over this heading</h2>
      </Tooltip>
      <Tooltip tooltipId="secondTooltip" text="This is another tooltip for the second div">
        <p>Hover over this paragraph to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
