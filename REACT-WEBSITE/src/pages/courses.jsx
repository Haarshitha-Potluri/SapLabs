import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import "./courses.css";

const Courses = () => {
    const { courseTopics, setCourseTopics } = useContext(AppContext);

    const markCompleted = (id) => {
        setCourseTopics(prev =>
            prev.map(topic =>
                topic.id === id
                    ? { ...topic, completed: true }
                    : topic
            )
        );
    };

    return (
        <div className="page-container">
            <h2>Courses</h2>

            <ul>
                {courseTopics.map(topic => (
                    <li key={topic.id} className="topic-card">
                        <span className="topic-name">
                            {topic.name}
                        </span>

                        {topic.completed ? (
                            <span className="completed-badge">✅ Completed</span>
                        ) : (
                            <button onClick={() => markCompleted(topic.id)}>
                                Mark as Completed
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
