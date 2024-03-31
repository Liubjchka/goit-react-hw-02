// import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, reset }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Reset: {reset}</p>
    </>
  );
}

export default Feedback;
