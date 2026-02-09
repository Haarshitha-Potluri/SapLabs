import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import "./dashboard.css";

const Dashboard = () => {
    const {
        courseTopics,
        completedTopics,
        quizScore,
        totalQuestions
    } = useContext(AppContext);

    return (
        <div className="page-container">
            <h2>Dashboard</h2>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Topics</h3>
                    <p>{courseTopics.length}</p>
                </div>

                <div className="stat-card">
                    <h3>Completed Topics</h3>
                    <p>{completedTopics}</p>
                </div>

                <div className="stat-card">
                    <h3>Quiz Score</h3>
                    <p>
                        {quizScore} / {totalQuestions || 0}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
