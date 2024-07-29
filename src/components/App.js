import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
    <div>
    <Tooltip tooltipId="firstTooltip" text="This is a tooltip for the first div">
        <h2>Hover over this heading</h2>
      </Tooltip>
    </div>
    </h2>
      <p className="tooltip"><Tooltip tooltipId="secondTooltip" text="This is another tooltip for the second div">
    <div>
        <p>Hover over this paragraph to see another tooltip</p>
      </Tooltip>
    </div>
    </p>
    </div>
  );
}

export default App;
