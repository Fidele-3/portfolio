import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  console.log("App component is rendering");

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* ✅ Default route */}
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
