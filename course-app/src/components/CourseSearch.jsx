import React, { useState, useEffect } from "react";
import { getCourses } from "../services/api";

function CourseSearch() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await getCourses(searchTerm);
      setCourses(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch courses. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCourses();
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Course Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for courses"
        />
        <button type="submit">Search</button>
      </form>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseSearch;
