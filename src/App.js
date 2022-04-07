import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Layouts/About";
import Certifications from "./Layouts/Certification";

function App() {
  return (
    <div className="App">
      //TODO
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Certification" element={<Certifications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
