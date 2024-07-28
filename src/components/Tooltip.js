import React, { useState } from "react";
import './Tooltip.css'; // Ensure this imports your CSS

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div 
      className="tooltip-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
