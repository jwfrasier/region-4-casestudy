import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseParticipation() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get("/api/enrolled-courses");
        setEnrolledCourses(response.data);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <h2>Course Participation</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseParticipation;
