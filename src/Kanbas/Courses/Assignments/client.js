import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_BASE;
//   const COURSES_URL = `${API_BASE}/courses`;
//   const ASSIGNMENTS_URL = `${API_BASE}/assignments`

 const COURSES_URL = "http://localhost:4000/api/courses";
 const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";
//  const COURSES_URL = "http://localhost:4000/api/courses";
//  const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
export const deleteAssignment = async (assignmentId) => {
    await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  };
  export const editAssignment = async (assignmentId, updatedAssignment) => {
    try {
      const response = await axios.put(`${ASSIGNMENTS_URL}/${assignmentId}`, updatedAssignment);
      return response.data;
    } catch (error) {
      console.error("Error editing assignment:", error);
      throw error; // Rethrow the error to be handled where the editAssignment function is called
    }
  };
