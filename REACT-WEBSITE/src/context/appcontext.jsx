import { createContext, useState } from "react";
import { topics } from "../data/courses";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [courseTopics, setCourseTopics] = useState(topics);
    const [quizScore, setQuizScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    const completedTopics = courseTopics.filter(t => t.completed).length;

    return (
        <AppContext.Provider
            value={{
                courseTopics,
                setCourseTopics,
                completedTopics,
                quizScore,
                setQuizScore,
                totalQuestions,
                setTotalQuestions
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
