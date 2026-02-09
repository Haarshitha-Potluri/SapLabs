import React from "react";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Welcome to React Learning App</h2>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                {courses.map(course => (
                    <div
                        key={course.id}
                        onClick={() => navigate(course.id === 1 ? "/courses" : "/quiz")}
                        style={{
                            border: "1px solid #ccc",
                            padding: "1rem",
                            borderRadius: "8px",
                            cursor: "pointer",
                            width: "200px",
                            transition: "transform 0.2s, box-shadow 0.2s"
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
