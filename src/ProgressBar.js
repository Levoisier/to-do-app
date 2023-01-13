import React, { useState } from 'react';
import './ProgressBar.css';

let ProgressBar = (total, completed) => {
    const [progress, setProgress] = useState(10);
    return (
    <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
        </div>
        <button onClick={() => setProgress(progress + 10)}>
        SET GOAL
        </button>
    </div>
  );
}

export {ProgressBar};