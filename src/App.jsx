import './App.css';
import { GermanNouns } from './components/GermanNouns';

function App() {
  return (
    <div className="App">
      {/* <GermanNouns /> */}
      <GermanNouns article="das" number={10} />
      <GermanNouns article="die" number={15} />
      <GermanNouns article="der" number={20} />
    </div>
  );
}

export default App;
