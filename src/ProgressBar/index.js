import React, { useState, useEffect } from 'react';
import { TodoContext } from '../TodoContext';
import './ProgressBar.css';


let ProgressBar = () => {
   
  let { totalTodos, completedTodos } = React.useContext(TodoContext);
  const [animate, setAnimate] = useState(false);
  
  if (!totalTodos){
    totalTodos = 1
  }
  let progressPercent = (completedTodos / totalTodos * 100).toFixed(0)

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