// import css from './Options.module.css';

function Options(increaseFeedback) {
  return (
    <>
      <button onClick={() => increaseFeedback("good")}>Good</button>
      <button onClick={() => increaseFeedback("neutral")}>Neutral</button>
      <button onClick={() => increaseFeedback("bad")}>Bad</button>
    </>
  );
}

export default Options;
