import { useTimersCtx } from '../timers-ctx.tsx';
import Button from './UI/Button.tsx';

export default function Header() {

  const timersCtx = useTimersCtx();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={ timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers}>{timersCtx.isRunning ? "Stop Timers" : "Start Timers"}</Button>
    </header>
  );
}
