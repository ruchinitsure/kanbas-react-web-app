import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams,useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";



function Courses({ courses }) {
  const { courseId } = useParams();
  
  const [course, setCourse] = useState({});
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = `${API_BASE}/courses`;
   const URL = "https://kanbas-node-server-app-d7f7.onrender.com/api/courses";
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  // const course = courses.find((course) => course._id === courseId);

  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter((part) => part !== "");
  const lastPart = pathParts[pathParts.length - 1];


  return (
    <div className="hamburger">
        <div className="top-part">
        
        <p className="course-name">
        <AiOutlineMenu className="icon" />
        {course.number}
        <span className="gt">&gt;</span>
        <span className="bread">{lastPart}</span>
      </p>
      </div>
      <div style={{ width: "100%" }}>
  <hr className="mt-2 mb-4" />
</div>
      <CourseNavigation />
      <div>

      <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
    
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
           
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
          </Routes>
        </div>
      </div>
      </div>

  );
}
export default Courses;