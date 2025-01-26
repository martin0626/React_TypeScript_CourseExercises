import { useTimersCtx } from "../timers-ctx";
import TimerComp from "./Timer";

export default function Timers() {

  const timersCtx = useTimersCtx();

  return (
    <ul>
      {timersCtx.timers.map(el=> <TimerComp timer={el} />)}
    </ul>
  )
}
