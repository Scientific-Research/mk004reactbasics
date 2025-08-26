export const GermanNouns = ({ GermanNouns }) => {
  return (
    <>
      <h1>German Nouns</h1>
      <h3>There are {GermanNouns.length} German nouns in the JSON data!</h3>
      {GermanNouns.map((n) => (
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
      ;
    </>
  );
};
