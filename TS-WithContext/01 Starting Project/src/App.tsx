import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimersCtx from './timers-ctx.tsx';

function App() {
  return (
    <TimersCtx>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersCtx>
  );
}

export default App;
