import React, { useState } from "react";
import { enrollCourse } from "../services/api";

function CourseEnrollment() {
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEnroll = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await enrollCourse(courseId);
      setMessage(response.message);
      setCourseId("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to enroll in the course");
    }
  };

  return (
    <div>
      <h2>Course Enrollment</h2>
      <form onSubmit={handleEnroll}>
        <input
          type="number"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Enter Course ID"
          required
        />
        <button type="submit">Enroll</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CourseEnrollment;
