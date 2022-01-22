import { useEffect, useState } from "react";
import { connect } from "../slomux/connect";

import { Interval } from "./Interval";

function TimerComponent({ currentInterval }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO: improved timer
  useEffect(() => {
    let timerId;

    if (isRunning && currentInterval > 0) {
      timerId = setInterval(() => {
        setCurrentTime((prevValue) => prevValue + 1);
      }, currentInterval * 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [currentInterval, setCurrentTime, isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
    setCurrentTime(0);
  }

  return (
    <div>
      <Interval />
      <div>Секундомер: {currentTime} сек.</div>
      <div>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>
    </div>
  );
}

export const Timer = connect(
  (state) => ({
    currentInterval: state,
  }),
  () => {}
)(TimerComponent);
