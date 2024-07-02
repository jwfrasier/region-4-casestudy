import React, { useState } from "react";
import axios from "axios";

function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/courses?search=${searchTerm}`);
      setCourses(response.data);
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  return (
    <div>
      <h2>Course Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseSearch;
