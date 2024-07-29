import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        Hover over me
        <Tooltip text="This is a tooltip">
          <span>Hover over me</span>
        </Tooltip>
      </h2>
      <p className="tooltip">
        Hover over me to see another tooltip
        <Tooltip text="This is another tooltip">
          <span>Hover over me to see another tooltip</span>
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
