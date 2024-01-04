import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Tutor from "./pages/Tutor/tutor";
import Learning from "./pages/Learnings/learning";
import Staffing from "./pages/Staffing/staffing";
import Resume from "./pages/Resume/resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/resume-marketing" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
