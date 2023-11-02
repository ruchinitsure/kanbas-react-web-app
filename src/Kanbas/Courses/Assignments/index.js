import React, { useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAssignment, removeAssignment } from "./assignmentsReducer";
import { FaCheckCircle } from 'react-icons/fa';
import { RiAddLine } from 'react-icons/ri';
import "./index.css";

function Assignments() {
  const { courseId,points,due } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const navigate = useNavigate();

  const [isAssignmentsOpen, setIsAssignmentsOpen] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    course: courseId,
    points : points,
    due : due,
  });

  const dispatch = useDispatch();

  const toggleAssignments = () => {
    setIsAssignmentsOpen(!isAssignmentsOpen);
  };


  function generateUniqueAssignmentID(assignments) {
    const assignmentIds = assignments.map(assignment => assignment._id);
    let newId;
    
    do {
      newId = generateRandomID(); 
    } while (assignmentIds.includes(newId));
    
    return newId;
  }
  
  // Replace this with your actual logic for generating a random ID
  function generateRandomID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 4;
    let randomID = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters.charAt(randomIndex);
    }
  
    return randomID;
  }

  const handleAddAssignment = () => {
    const assignmentID = generateUniqueAssignmentID(courseAssignments); // Pass the courseAssignments array
    dispatch(createAssignment({
      ...newAssignment,
      _id: assignmentID, 
    }));
  
    setNewAssignment({
      title: "",
      description: "",
      course: courseId,
      points:points,
    });
      navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentID}`);
  };

  const handleDeleteAssignment = (assignmentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      dispatch(removeAssignment(assignmentId));
    }
  };

  return (
    <div className="assign1">
      <div className="d-flex  ">
        <div className="w-25 float-left-end">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search for Assignments"
            />
          </form>
        </div>
        <div className="assign3">
          <button className="btn  ml-auto"><RiAddLine />Group</button>
          <button className="btn btn-danger" onClick={handleAddAssignment}>
            <RiAddLine />Assignment
          </button>
          <button className="ellipsis-button">
            <span className="ellipsis-icon"></span>
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
              <li
                className="list-group-item border-left border-success d-flex justify-content-between align-items-center"
                key={assignment._id}
              >
                <div>
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black" }}>
                    {assignment.title}
                  </Link>
                  <br />
                  <span className="multiple">Multiple Modules</span> | <span className="due">Due {assignment.due}</span> | <span className="due">{assignment.points} pts</span>
                </div>
                

                <span className="d-flex justify-content-end" style={{ color: 'green' }}>
                <button onClick={() => handleDeleteAssignment(assignment._id)} className="btn btn-danger">
                  Delete
                </button>
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
