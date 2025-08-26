import './App.css';
import germanNoun from './data/germanNouns.json';

function App() {
  return (
    <div className="App">
      {/* {germanNoun.forEach((n) => {
        console.log(n);
      })} */}

      {germanNoun.map((n) => (
        <div key={n.singular}>
          <p>article: {n.article}</p>
          <p>singular: {n.singular}</p>
          <p>plural: {n.plural}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
