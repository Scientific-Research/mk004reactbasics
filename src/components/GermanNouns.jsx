export const GermanNouns = ({ GermanNouns }) => {
  return GermanNouns.map((n) => (
    <div className="germanNouns" key={n.singular}>
      <img src="/images/cardback2.png" alt="" />
      <div>
        <p className="singular">
          {n.article} {n.singular}
        </p>
        <p className="plural">{n.plural}</p>
      </div>
    </div>
  ));
};
