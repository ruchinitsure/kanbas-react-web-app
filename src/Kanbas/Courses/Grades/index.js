import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaDownload, FaUpload } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <div className="d-flex justify-content-right">
        <div className="gradebook">
      <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="book">Gradebook</span>
            </button>
      <div className="dropdown-menu">
              <a className="dropdown-item" href="../../Database">
                Export Option 1
              </a>
              <a className="dropdown-item" href="../../Database">
                Export Option 2
              </a>
              </div>

      </div>
      </div>
      <div className="imp">
      <div className="d-flex justify-content-end">
        <div className="button-right">
          <button className="btn btn-light"><FaDownload />Import</button>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaUpload />Export
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="../../Database">
                Export Option 1
              </a>
              <a className="dropdown-item" href="../../Database">
                Export Option 2
              </a>
            </div>
          </div>
          <button className="ellipsis-button">
          <FiSettings className="settings-icon" />
          </button>
        </div>
      </div>
      </div>
     
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="student-search" className="form-label">
            Student Names
          </label>
          <div className="input-group">
            <select id="student-search" className="form-control">
              <option value="" disabled defaultValue>
                <i className="fas fa-search"></i>Select Student
              </option>
    
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="assignment-search" className="form-label">
            Assignment Names
          </label>
          <div className="input-group">
            <select id="assignment-search" className="form-control">
              <option value="" disabled defaultValue>
                Select Assignment
              </option>
    
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-light"><FaFilter />Apply Filters</button>
        </div>
      </div>
      <br />
      <div className="table-wrapper-scroll-y my-custom-scrollbar table-container">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Student</th>
                {assignments.map((assignment) => (
                  <th key={assignment._id}>{assignment.title}
                   <br></br>
                            OUT OF 100</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr key={enrollment._id}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user && grade.assignment === assignment._id
                      );
                      return (
                        <td key={assignment._id}>
                          <input
                            type="text"
                            value={grade?.grade || ""}
                            title={grade?.grade || ""}
                            className="form-control form-control-sm"
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;