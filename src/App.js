import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Project from "./project";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
  return (
    <HashRouter>
  <div>
    <Routes>
      <Route path="/"         element={<Navigate to="/Labs"/>}/>
      <Route path="/Labs/*"   element={<Labs/>}/>
      <Route path="/hello"    element={<HelloWorld/>}/>
      <Route path="/kanbas/*" element={<Kanbas/>}/>
      <Route path="/project/*" element={<Project />} />
    </Routes>
  </div>
</HashRouter>
  );
}
export default App;
