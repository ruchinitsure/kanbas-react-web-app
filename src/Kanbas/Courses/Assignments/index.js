import React, { useState , useEffect} from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAssignment, removeAssignment, setAssignments } from "./assignmentsReducer";
import { FaCheckCircle } from 'react-icons/fa';
import { RiAddLine } from 'react-icons/ri';
import "./index.css";
import { findAssignmentsForCourse} from "./client";

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

  useEffect(() => {
    fetchAssignments();
  }, [courseId]);

  const fetchAssignments = async () => {
    try {
      const assignments = await findAssignmentsForCourse(courseId);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

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

  const handleAddAssignment = async () => {
    try {
      // Generate a unique assignment ID
      const assignmentId = generateUniqueAssignmentID(courseAssignments);
  
      // Create a new assignment object with the generated ID
      const newAssignmentWithId = {
        ...newAssignment,
        _id: assignmentId,
      };
  
      // Call createAssignment with the new assignment object
      const assignment = await createAssignment(courseId, newAssignmentWithId);
  
      // Dispatch the created assignment to the Redux store
      dispatch(createAssignment(assignment));
  
      // Reset the form fields
      setNewAssignment({
        title: "",
        description: "",
        course: courseId,
        points: points,
        due: due,
      });
  
      // Use the navigate function to redirect to the new assignment page
      navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`);
    } catch (error) {
      console.error("Error adding assignment:", error);
      // Handle the error as needed
    }
  };

  const handleDeleteAssignment = async (assignmentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      try {
        await removeAssignment(assignmentId);
        dispatch(removeAssignment(assignmentId));
      } catch (error) {
        console.error("Error deleting assignment:", error);
        // Handle the error as needed
      }
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
