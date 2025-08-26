import './App.css';
import germanNoun from './data/germanNouns.json';

function App() {
  return (
    <div className="App">
      <h1>German Nouns</h1>
      <h3>There are {germanNoun.length} German nouns in the JSON data!</h3>
      {germanNoun.map((n) => (
        <div className="germanNouns" key={n.singular}>
          <p className="singular">
            {n.article} {n.singular}
          </p>
          <p className="plural">{n.plural}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
