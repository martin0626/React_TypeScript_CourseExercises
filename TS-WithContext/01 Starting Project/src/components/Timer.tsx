import { Timer } from '../timers-ctx.tsx';
import Container from './UI/Container.tsx';


type TimerCompProps = {
  timer: Timer
}


export default function TimerComp({timer}: TimerCompProps ) {
  return (
    <Container as="article">
      <h2>{timer.name}</h2>
      <p>{timer.duration}</p>
    </Container>
  );
}
