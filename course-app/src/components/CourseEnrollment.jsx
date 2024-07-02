import React, { useState } from "react";
import axios from "axios";

function CourseEnrollment() {
  const [courseId, setCourseId] = useState("");

  const handleEnroll = async () => {
    try {
      await axios.post("/api/enroll", { courseId });
      alert("Enrolled successfully!");
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  return (
    <div>
      <h2>Course Enrollment</h2>
      <input
        type="text"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        placeholder="Enter Course ID"
      />
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
}

export default CourseEnrollment;
