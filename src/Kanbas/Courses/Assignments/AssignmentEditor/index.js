import React from "react";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./index.css"
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="editor">
      {/* <h1>Assignment Editor!!! {assignment.title}</h1> */}
      <div class="d-flex justify-content-end">
                <div class="button-right">
    
              <button type="button" class="btn-sm btn-success custom-success-btn mb-1">
               <span className="publish"><FaCheck /> Published</span>
            </button>
            </div>
            <button class="ellipsis-button">
        <span class="ellipsis-icon"></span>
    </button>
     </div>
      <label for="text-fields-student">Assignment Name</label>
      <input className="form-control" defaultValue={assignment.title} />
      <br></br>
      <textarea id="assignment-description" class="form-control" rows="5">This is the assignment description.</textarea>
      <br></br>
        <div class="row mb-3">
                <label for="r1" class="col-sm-2 col-form-label">
                  Points</label>
                <div class="col col-sm-10">
                  <input type="number" class="form-control"
                         id="r1"/>
                </div>
        </div>
              <br></br>
              <div class="row mb-3">
                <label for="r2" class="col-sm-2 col-form-label">
                  Assign Group</label>
                <div class="col col-sm-10">
                    <select id="r2" class="form-control">
                        <option value="Edit">Edit</option>
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="Duplicate">Duplicate</option>
                        <option value="Delete">Delete</option>
                    </select>
                </div>
              </div>
              <br></br>
              <div class="row mb-3">
                <label for="r2" class="col-sm-2 col-form-label">
                  Display Grade As</label>
                <div class="col col-sm-10">
                    <select id="text-fields-display-grade" class="form-control">
                        <option value="Edit"></option>
                        <option selected value="Percentage">Percentage</option>
                        <option value="Duplicate"></option>
                        <option value="Delete"></option>
                    </select>
                </div>
              <br></br>
              <br></br>
              <br></br>
              <div class="row mb-3">
                <div class="col-sm-10 offset-sm-2">
                  <div class="form-check">
                    <input class="form-check-input"
                           type="checkbox" id="r6"/>
                      <label class="form-check-label" for="r6">
                        Do not count this assignment towards the final grade</label>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="row mb-3">
                <div class="col col-sm-6">
                    <label for="input1" class="form-label">Submission Type</label>
                </div>
                <div class="col-sm-6 border p-3">
                   
                    
                    <select class="form-select">
                        <option selected>Online</option>
                     </select>
                     <br></br>
                     <label class="form-check-label mb-3 mt-3">Online Entry Options</label>
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                        <label class="form-check-label" for="flexCheckChecked">
                          Text Entry
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                        <label class="form-check-label" for="flexCheckChecked">
                          Website URL 
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                        <label class="form-check-label" for="flexCheckChecked">
                          Media Recordings
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                          Student Annotations
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                          File Uploads
                        </label>
                      </div>

                </div>
                
       
            </div>
            <hr></hr>
        
        
     <div class="d-flex justify-content-end">
      <button onClick={handleSave} className="btn btn-danger">
        Save
      </button>
      <Link
        className="btn "
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
      </div>
    </div>
  );
}

export default AssignmentEditor;