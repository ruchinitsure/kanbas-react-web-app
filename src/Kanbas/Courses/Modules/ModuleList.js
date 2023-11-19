import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse,createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const [openModule, setOpenModule] = useState(null);
  const [openLesson, setOpenLesson] = useState(null);

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const handleModuleClick = (moduleIndex) => {
    if (openModule === moduleIndex) {
      setOpenModule(null);
    } else {
      setOpenModule(moduleIndex);
    }
  };

  const handleLessonClick = (lessonIndex) => {
    if (openLesson === lessonIndex) {
      setOpenLesson(null);
    } else {
      setOpenLesson(lessonIndex);
    }
  };

  return (
    <div className="mod">
      <ul className="list-group">
        <li className="list-group-item">
          <input
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            className="form-control"
          />
          <textarea
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            className="form-control"
          />
          <button onClick={handleAddModule} className="btn btn-success">
            Add
          </button>
          <button onClick={handleUpdateModule} className="btn btn-primary">
            Update
          </button>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, moduleIndex) => (
            <li key={moduleIndex} className="list-group-item module">
              <button
                className={`dropdown-button ${openModule === moduleIndex ? "open" : ""}`}
                onClick={() => handleModuleClick(moduleIndex)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <h3>{module.name}</h3>
                  </span>
                  <div className="ed">
                  <button onClick={() => handleDeleteModule(module._id)} className="btn btn-danger">
                      Delete
                    </button>
                    <button onClick={() => dispatch(setModule(module))} className="btn btn-success">
                      Edit
                    </button>
                    
                  </div>
                </div>
              </button>
              {openModule === moduleIndex && (
                <div className="module-content">
                  <p>{module.description}</p>
                  {module.lessons && (
                    <ul className="list-group">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="list-group-item lesson">
                          <button
                            className={`dropdown-button ${openLesson === lessonIndex ? "open" : ""}`}
                            onClick={() => handleLessonClick(lessonIndex)}
                          >
                            <h4>{lesson.name}</h4>
                          </button>
                          {openLesson === lessonIndex && (
                            <div className="lesson-content">
                              <p>{lesson.description}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;
