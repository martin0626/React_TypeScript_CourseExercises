import { useEffect, useRef, useState } from 'react';
import { Timer, useTimersCtx } from '../timers-ctx.tsx';
import Container from './UI/Container.tsx';


type TimerCompProps = {
  timer: Timer
}


export default function TimerComp({timer}: TimerCompProps ) {
  const [remainingTime, setRemTime] = useState(timer.duration * 1000);
  const intervalRef = useRef<number | null>(null);
  const { isRunning } = useTimersCtx();


  if(remainingTime <= 0 && intervalRef.current){
    clearInterval(intervalRef.current);
  }


  useEffect(()=>{
    let timer: number;

    if(isRunning){
      timer = setInterval(()=> setRemTime(prevTiem=> {
        if(prevTiem <= 0){
          return prevTiem;
        }
        return prevTiem - 50
      }), 50);
      intervalRef.current = timer
    }else if(intervalRef.current){
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  let formatedTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{timer.name}</h2>
      <progress max={timer.duration} value={formatedTime} />
      <p>{formatedTime}</p>
    </Container>
  );
}
