import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }


function timeLogic(seconds, minutes, hours) {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        timeLogic(seconds,minutes,hours);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s : {minutes}m : {hours}h
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
         Start
        </button>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;