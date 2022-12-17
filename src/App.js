import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./PortfolioContainer/Project/ProjectDisplay";
import Review from "./Review";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigat /> */}

        <Routes>
          <Route path="/" element={<Review />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />

          {/* <Resume /> */}

          {/* <ContactUs/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
