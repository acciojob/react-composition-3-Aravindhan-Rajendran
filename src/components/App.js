import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <button type="button">Hover over me</button>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <button type="button">Hover over me to see another tooltip</button>
      </Tooltip>
    </div>
  );
}

export default App;
