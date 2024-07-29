import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2 className="tooltip" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
        {isVisible && <div>{text}</div>}
      </h2>
    </div>
  );
};

export default Tooltip;
