import { useState, useEffect } from "react";
import { TimeElapsed } from "./TimeElapsed";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [timeElapsed, setTimeElapsed] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startPause = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setTimeElapsed([]);
  };
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  const handleTimeElapsed = () => {
    if (isRunning) {
      const lapTime = formatTime();
      setTimeElapsed((prevLaps) => [...prevLaps, lapTime]);
      setIsRunning(false);
      setTime(0);
    }
  };

  return (
    <div className="stopwatch">
      <h1>{formatTime()}</h1>
      <div className="stopwatch-controls">
        <button className="control-button" onClick={startPause}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="control-button"
          onClick={handleTimeElapsed}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button className="control-button" onClick={reset}>
          Reset
        </button>
      </div>
      <TimeElapsed timeElapsed={timeElapsed} />
    </div>
  );
};

export default StopWatch;
