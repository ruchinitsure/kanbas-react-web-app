import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"
// import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr></hr>
      <h5>Published Courses(3)</h5>
      <hr></hr>
      
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <div className="row">
        <div className="col">
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          />
        </div>
        <div className="col">
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-3">
        <button onClick={addNewCourse} className="btn btn-success">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary ml-2">
          Update
        </button>
      </div>

      <div className="list-group mt-3">
        {courses.map((c) => (
          <div key={c._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="link">
            <Link to={`/Kanbas/Courses/${c._id}`} className="course-link">
              {c.name}
            </Link>
            </div>
            <div>
            <button
  onClick={() => setCourse(c)}
  className="btn btn-warning mr-2"
>
  Edit
</button>
              <button
                onClick={() => deleteCourse(c._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;