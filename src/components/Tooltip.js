import React, { useState } from 'react';

const Tooltip = ({ text, tooltipId }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      id={tooltipId}
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
