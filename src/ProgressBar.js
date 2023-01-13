import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(25);

  return (
    <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
        </div>
        {/* <button onClick={() => setProgress(progress + 10)}>Increment</button> */}
    </div>
  );
}

export {ProgressBar};