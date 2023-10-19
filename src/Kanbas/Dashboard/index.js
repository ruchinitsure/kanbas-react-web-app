import db from "../Database";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card">
              <img src="/logo2.png" className="card-img-top" alt="Course Thumbnail" />
              <div className="card-body">
                <h5 className="card-title">{course.number}</h5>
               

                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item ">
                  <span className="name">{course.name}</span>
                </Link>
            
                <span className="card-text">
                  202410. Fall 2023 Semester Full Term
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;