import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";

import { useState,useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = `${API_BASE}/courses`;
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    console.log("Before sending it :" ,course)
    console.log("Before sending it :" ,courses)
    console.log("URL :" ,URL)
    const response = await axios.post(URL, course);
    console.log("After server:",response.data)
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({...course});
  };

  const deleteCourse = async(courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ ...course});
  };

  return (
    <Provider store={store}>

    <div className="d-flex">
      <KanbasNavigation />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
} />
          <Route path="Courses/:courseId/*" element={<Courses  courses={courses}/>} />
        
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;