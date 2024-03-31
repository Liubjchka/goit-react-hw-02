import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks) {
      return JSON.parse(savedFeedbacks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback {...feedback} />
    </>
  );
}

export default App;
