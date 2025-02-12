import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./strona-c.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Mount Orange School</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/courses">My Courses</Link>
        </nav>
      </header>

      <h2>Hi, teacher! </h2>
      <h3>Course overview</h3>

      <div className="courses-grid">
        <div className="course-card">
          <Link to="/strona-mc">
            <img
              src="mindful-course.jpg"
              alt="Mindful Course Creation"
            />
            <h4>Mindful Course Creation</h4>
            <p>Mount Orange Community</p>
          </Link>
        </div>
        <div className="course-card">
          <img src="mountaineering.jpg" alt="Moodle and Mountaineering" />
          <h4>Moodle and Mountaineering</h4>
          <p>Physical Education</p>
        </div>
        <div className="course-card">
          <img src="activity-examples.jpg" alt="Activity Examples" />
          <h4>Activity Examples</h4>
          <p>Moodle Resources</p>
        </div>
      </div>
    </div>
  );
};

const StronaMC: React.FC = () => {
  return (
    <div>
      <h1>Mindful Course Creation</h1>
      <p>Welcome to the mindful course creation page!</p>
    </div>
  );
};

const StronaC: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/strona-mc" element={<StronaMC />} />
    </Routes>
  );
};

export default StronaC;
