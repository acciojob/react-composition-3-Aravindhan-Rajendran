import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip for the first div">
        Hover over this div
      </Tooltip>
      <Tooltip text="This is another tooltip for the second div">
        Hover over this div to see another tooltip
      </Tooltip>
    </div>
  );
}

export default App;
