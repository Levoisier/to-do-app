import React, { useState, useEffect } from 'react';
import './ProgressBar.css';


let ProgressBar = ({total, completed}) => {
  const [animate, setAnimate] = useState(false);
  let progressPercent = (completed / total * 100).toFixed(0)

  useEffect(() => { 
    setAnimate(true);
  }, [progressPercent]);

  return (
    <div className="progress-bar-container">
      <div
        className={`progress-bar ${animate ? 'animate' : ''}`}
        style={{ width: `${progressPercent}%` }}
        onTransitionEnd={() => setAnimate(false)}
      >
        {progressPercent}%
      </div>
      
    </div>
  );
}


export {ProgressBar};