import ModuleList from "../Modules/ModuleList";
import "./index.css"
import { FaDownload, FaUpload, FaHome, FaEye, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";

function Home() {
  return (
    
    <div className="row">
      <div className="col-8">
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
        <ModuleList />
      </div>
      <div className="col-3 list">
    
        <ul className="list-group">
        <li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaDownload /> Import Existing Content
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaUpload /> Import from Commons
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaHome /> Choose Home Page
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaEye /> View Course Stream
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaBullhorn /> New Announcement
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaChartBar /> New Analytics
  </a>
</li>
<li className="list-group-item">
  <a href="../Database" className="link" style={{ color: "grey" }}>
    <FaBell /> View Course Notifications
  </a>
</li>
        </ul>
        <br></br>
     
      <div className="todo">
        <h2>To Do</h2>
        <hr />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a href="../Database" className="link" style={{ color: "red"}}>
               Grade A1 - ENV + HTML
            </a>
          </li>
          <li>
            <a href="../Database" className="link" style={{ color: "red" }}>
               Grade A2 -  CSS + BOOTSTRAP
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div className="coming-up">
        <h2>Coming Up</h2>
        <hr />
        <br />
        <a href="../Database">
          <i className="fas fa-calendar"></i> Lecture CS4550.12631.202410 Sep 7 at 11:45 am
        </a>
        <br />
        <br />
        <a href="../Database">
          <i className="fas fa-calendar"></i> Lecture CS4550.12631.202410 Sep 11 at 11:45 am
        </a>
        <br />
        <br />
        <a href="../Database">
          <i className="fas fa-calendar"></i> CS5610 06 SP23 Lecture Sep 11 at 6pm
        </a>
        <br />
        <br />
      </div>
      </div>
    </div>

  );
}

export default Home;