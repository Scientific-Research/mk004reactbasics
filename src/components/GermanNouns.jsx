import _germanNouns from '../data/germanNouns.json';

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
  return array;
}

// Used like so
// let arr = [2, 11, 37, 42];
// shuffle(arr);
// const germanNouns = shuffle(_germanNouns);

//SELECT ONLY THE NOUNS WITH ARTICLE der => using filter method
// const germanNouns = shuffle(_germanNouns).filter((d) => d.article === 'der');
// shuffle(germanNoun);
// console.log(arr);
// console.log(germanNoun);

export const GermanNouns = ({ article, number }) => {
  // To set the type of every article
  const germanNouns = shuffle(_germanNouns).filter(
    (d) => d.article === article
  );

  // To set the number of every article
  console.log(number);
  germanNouns.length = germanNouns.length - (germanNouns.length - number);

  return (
    <>
      <h1>German Nouns</h1>
      <h3>
        There are {germanNouns.length} German nouns for article{' '}
        <span className="article">"{article}"</span> in the JSON data!
      </h3>
      {germanNouns.map((n) => (
        <div className="germanNouns" key={n.singular}>
          <img src="/images/cardback2.png" alt="" />
          <div>
            <p className="singular">
              {n.article} {n.singular}
            </p>
            <p className="plural">{n.plural}</p>
          </div>
        </div>
      ))}
    </>
  );
};
