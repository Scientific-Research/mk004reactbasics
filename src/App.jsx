import './App.css';
import { GermanNouns } from './components/GermanNouns';

function App() {
  return (
    <div className="App">
      {/* <GermanNouns /> */}
      <GermanNouns article="das" />
      <GermanNouns article="die" />
      <GermanNouns article="der" />
    </div>
  );
}

export default App;
