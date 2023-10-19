import ModuleList from "./ModuleList";
import "./index.css";
import { FaGlasses } from "react-icons/fa";

function Modules() {
  return (
    <div>
      <div className="but">
      <button className="btn "><FaGlasses />Student View</button>
      </div>
      {/* <h2>Modules</h2> */}
      <div className="module-sidebar d-flex ">
      <button className="btn btn-light">Collapse All</button>
      <button className="btn btn-light">View Progress</button>
      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="publishDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa-regular fa-circle-check"></i>
          Publish All
        </button>
        <div className="dropdown-menu" aria-labelledby="publishDropdown">
        <a href="../Database" role="button">COMEDY</a>
        <a href="../Database" role="button">DRAMA</a>
        <a href="../Database" role="button">Publish</a>
        <a href="../Database" role="button">FANTASY</a>
        </div>
      </div>
      <button className="btn btn-danger"><i className="fa-solid fa-plus"></i>Module</button>
      <button class="ellipsis-button">
        <span class="ellipsis-icon"></span>
    </button>
    </div>
    <hr></hr>

      <ModuleList />
    </div>
  );
}
export default Modules;