import { useState, useEffect } from 'react';

type TimerHookProps = {
  initialTime?: number;
};

type TimerHookResult = {
  currentTime: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  setTimer: (time:number) => void;
};

const useTimer = ({ initialTime }: TimerHookProps): TimerHookResult => {
  const [currentTime, setCurrentTime] = useState(initialTime?initialTime:0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (running) {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1);
    } else {
      clearInterval(timerId);
    }

    return () => {
      if(timerId){
        clearInterval(timerId);
      }
    };
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer  = () => {
    setCurrentTime(0);
  }
  const setTimer = (time:number) => {
    setCurrentTime(time);
  }

  return { currentTime, startTimer, stopTimer,resetTimer,setTimer };
};

export default useTimer;