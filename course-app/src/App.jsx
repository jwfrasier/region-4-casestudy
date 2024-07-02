import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CourseSearch from "./components/CourseSearch";
import CourseEnrollment from "./components/CourseEnrollment";
import CourseParticipation from "./components/CourseParticipation";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search Courses</Link>
            </li>
            <li>
              <Link to="/enroll">Enroll in Course</Link>
            </li>
            <li>
              <Link to="/participate">Participate in Course</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CourseSearch />} />
          <Route path="/enroll" element={<CourseEnrollment />} />
          <Route path="/participate" element={<CourseParticipation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
