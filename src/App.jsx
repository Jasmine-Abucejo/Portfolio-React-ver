import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import About from "../pages/About";

function App() {
  return (
    <div className="lg:h-screen flex lg:overflow-y-hidden ">
      <Navbar />

      <div className="flex-1 pb-20 overflow-auto">
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
