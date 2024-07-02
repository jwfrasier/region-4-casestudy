import React, { useState, useEffect } from "react";
import { getCourses } from "../services/api";
import "./CourseSearch.css";
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
    <div className="container">
      <h1>Course Search</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for courses"
        />
        <button type="submit">Search</button>
      </form>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="instructor">
              Instructor: {course.instructor.username}
            </p>
            <button onClick={() => handleEnroll(course.id)}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseSearch;
