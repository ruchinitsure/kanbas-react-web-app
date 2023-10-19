import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { FaCheckCircle } from 'react-icons/fa';
import { RiAddLine } from 'react-icons/ri';



function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId
    );
  
    const [isAssignmentsOpen, setIsAssignmentsOpen] = useState(false);
  
    const toggleAssignments = () => {
      setIsAssignmentsOpen(!isAssignmentsOpen);
    };
  
    return (
      <div className="assign1">
        <div class="d-flex  ">
          <div class="w-25 float-left-end">
            <form>
              <input type="text" class="form-control" placeholder="Search for Assignments" />
            </form>
          </div>
          <div className="assign3">
          <button class="btn  ml-auto"><RiAddLine />Group</button>
          <button class="btn btn-danger"><RiAddLine />Assignment</button>
          <button class="ellipsis-button">
        <span class="ellipsis-icon"></span>
    </button>
        </div>
        </div>
        <hr></hr>
        <div className="assign2">
        <ul className="list-group rounded bg-light p-3">
          <li
            className={`list-group-item list-group-item-secondary ${
              isAssignmentsOpen ? "open" : ""
            }`}
            onClick={toggleAssignments}
          >
            Assignments
            <span className="badge rounded-pill justify-content-end">40% of Total</span>
          </li>
          {isAssignmentsOpen &&
            courseAssignments.map((assignment) => (
              <li className="list-group-item border-left border-success d-flex justify-content-between align-items-center" key={assignment._id}>
                <div>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black" }}>
  {assignment.title}
  
</Link>
                  <br />
                  <span className="multiple">Multiple Modules</span> | <span className="due">Due September 18th 2024</span> | <span className="due">100pts</span>
                </div>
                <span className = "d-flex justify-content-end" style={{color: 'green' }}>
    <FaCheckCircle />
    <span className="ellipsis-icon"></span>
  </span>
              </li>
            ))}
        </ul>
        </div>
      </div>
    );
  }
export default Assignments;