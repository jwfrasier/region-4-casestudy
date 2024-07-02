import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getCourses = async (searchTerm = "") => {
  try {
    const response = await axios.get(
      `${API_URL}/courses/?search=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const enrollCourse = async (courseId) => {
  try {
    const response = await axios.post(`${API_URL}/courses/${courseId}/enroll/`);
    return response.data;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

export const getEnrolledCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses/my_courses/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    throw error;
  }
};
