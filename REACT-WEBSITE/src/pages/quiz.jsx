import { useContext, useState } from "react";
import { AppContext } from "../context/appcontext";
import { quizQuestions } from "../data/quiz";
import "./quiz.css";

const Quiz = () => {
    const { setQuizScore, setTotalQuestions } = useContext(AppContext);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (option) => {
        if (option === quizQuestions[current].answer) {
            setScore(prev => prev + 1);
        }

        if (current < quizQuestions.length - 1) {
            setCurrent(prev => prev + 1);
        } else {
            setShowResult(true);
            setQuizScore(score + (option === quizQuestions[current].answer ? 1 : 0));
            setTotalQuestions(quizQuestions.length);
        }
    };

    if (showResult) {
        return (
            <div className="quiz-result">
                <h2>Quiz Completed 🎉</h2>
                <p>Your Score: {score} / {quizQuestions.length}</p>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h2>{quizQuestions[current].question}</h2>

            {quizQuestions[current].options.map((opt, index) => (
                <button key={index} onClick={() => handleAnswer(opt)}>
                    {opt}
                </button>
            ))}
        </div>
    );
};

export default Quiz;
