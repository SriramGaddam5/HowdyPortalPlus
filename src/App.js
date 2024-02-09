import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Grades from "./pages/Grades";
import Finances from "./pages/Finances";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
