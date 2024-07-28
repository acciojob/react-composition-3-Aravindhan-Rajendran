import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => setShowTooltip(true);
  const handleMouseOut = () => setShowTooltip(false);

  return (
    <div className="tooltip" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
