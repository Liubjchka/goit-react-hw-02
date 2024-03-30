// import css from './Options.module.css';

function Options(onLeaveFeedback) {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    </>
  );
}

export default Options;
