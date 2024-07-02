import React, { useState } from "react";
import { enrollCourse } from "../services/api";

function CourseEnrollment() {
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const response = await enrollCourse(courseId);
      setMessage(response.message);
      setCourseId("");
    } catch (err) {
      setError("Failed to enroll in course");
    }
  };

  return (
    <div>
      <h2>Course Enrollment</h2>
      <form onSubmit={handleEnroll}>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Enter Course ID"
        />
        <button type="submit">Enroll</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CourseEnrollment;
