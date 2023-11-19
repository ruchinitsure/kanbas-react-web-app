import React, { useEffect,useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editAssignment } from "../assignmentsReducer";
import { FaCheck } from "react-icons/fa";
import "./index.css"



function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignments.find(a => a?._id === assignmentId)) || {
    title: "",
    description: "",
    points: 0,
    due: "",
    avail: "",
    until: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updatedAssignment, setUpdatedAssignment] = useState(assignment);

  const handleSave = async () => {
    console.log("Assignment ID:", assignmentId);
    console.log("Updated Assignment:", updatedAssignment);
  
    try {
      await editAssignment(assignmentId, updatedAssignment);
      // Placeholder for navigation, you need to implement your own navigation logic
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      console.log("Assignment saved. Redirect to Assignments screen.");
    } catch (error) {
      console.error("Error editing assignment:", error);
      // Handle the error as needed
    }
  };

  return (
    <div className="editor">
      <div className="d-flex justify-content-end">
        <div className="button-right">
          <button type="button" className="btn-sm btn-success custom-success-btn mb-1">
            <span className="publish"><FaCheck /> Published</span>
          </button>
        </div>
        <button className="ellipsis-button">
          <span className="ellipsis-icon"></span>
        </button>
      </div>
      <label htmlFor="text-fields-student">Assignment Name</label>
      <input
        className="form-control"
        value={updatedAssignment.title}
        onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, title: e.target.value })}
      />
      <br></br>
      <textarea
        id="assignment-description"
        className="form-control"
        rows="5"
        value={updatedAssignment.description}
        onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, description: e.target.value })}
      >
      </textarea>
      <br></br>
      {/* Other fields you want to edit */}
      <div className="row mb-3">
        <label for="r1" className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col col-sm-10">
          <input
            type="number"
            className="form-control"
            id="r1"
            value={updatedAssignment.points}
            onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, points: e.target.value })}
          />
        </div>
      </div>
      <br></br>
      <div class="row mb-3">
                <div class="col col-sm-6">
                    <label for="input1" class="form-label">Assign To</label>
                </div>
                <div class="col col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="col-md-10">
                                <label for="text-fields-assign">Assign To</label>
                                <input id="text-fields-assign" type="text" class="form-control" value="Everyone" placeholder="Everyone" /><br></br>
                         
                                <label for="text-fields-dob1">Due Date</label>
                                
                                <input type="date"className="form-control" id="text-fields-dob1" value={updatedAssignment.due} onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, due: e.target.value })}/>
                                <br></br>
                                <div class="row">
                                    <div class="col">
                               
                                        <label for="text-fields-dob2">Available from</label>
                                        <input type="date" id="text-fields-dob2" value={updatedAssignment.avail} onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, avail: e.target.value })} class="form-control" />
                                    </div>
                                    <div class="col">
                                
                                        <label for="text-fields-dob3">Until</label>
                                        <input type="date" id="text-fields-dob3" value={updatedAssignment.until} onChange={(e) => setUpdatedAssignment({ ...updatedAssignment, until: e.target.value })} class="form-control" />
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                    

            <hr></hr>
     
      <div className="d-flex justify-content-end">
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
        <Link
          className="btn"
          to={`/Kanbas/Courses/${courseId}/Assignments`}
        >
          Cancel
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
}

export default AssignmentEditor;
