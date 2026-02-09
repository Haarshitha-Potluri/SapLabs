import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <header>
            <h1>React Learning App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    );
};

export default Header;
