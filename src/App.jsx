import './App.css';
import germanNoun from './data/germanNouns.json';

// How to produce a random number in Javascript:
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// Used like so
// let arr = [2, 11, 37, 42];
// shuffle(arr);
// const randomizedNoun = shuffle(germanNoun);
shuffle(germanNoun);
// console.log(arr);
// console.log(germanNoun);

function App() {
  return (
    <div className="App">
      <h1>German Nouns</h1>
      <h3>There are {germanNoun.length} German nouns in the JSON data!</h3>
      {/* {randomizedNoun.map((n) => ( */}
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
