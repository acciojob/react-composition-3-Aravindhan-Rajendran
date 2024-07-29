import React, { useState } from 'react';

const Tooltip = ({ text, children, tooltipId }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      id={tooltipId}
      className="tooltip" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
