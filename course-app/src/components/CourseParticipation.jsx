import React, { useState, useEffect } from "react";
import { getEnrolledCourses } from "../services/api";

function CourseParticipation() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const data = await getEnrolledCourses();
      setEnrolledCourses(data);
    } catch (err) {
      setError("Failed to fetch enrolled courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Course Participation</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseParticipation;
