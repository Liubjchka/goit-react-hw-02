// import css from './Options.module.css';

function Options({ updateFeedback, resetFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {resetFeedback && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}

export default Options;
