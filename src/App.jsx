import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which CSS property changes text color?",
    options: ["text-color", "font-color", "color", "bgcolor"],
    correctAnswer: 2
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    correctAnswer: 2
  },
  {
    question: "Which symbol is used for id selector in CSS?",
    options: [".", "#", "*", "&"],
    correctAnswer: 1
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.stringify()", "JSON.parse()", "toObject()", "parseJSON()"],
    correctAnswer: 1
  }
];

export default function App() {
  const [currentQ, setCurrentQ] = useState(0); 
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[currentQ].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2>Quiz Finished</h2>
        <p>Score: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>Question {currentQ + 1} / {questions.length}</h3>
      <h2>{questions[currentQ].question}</h2>

      {questions[currentQ].options.map((opt, idx) => (
        <label key={idx} className="option">
          <input
            type="radio"
            name="option"
            checked={selected === idx}
            onChange={() => setSelected(idx)}
          />
          {opt}
        </label>
      ))}

      <button onClick={handleNext} disabled={selected === null}>
        Next
      </button>
    </div>
  );
}
