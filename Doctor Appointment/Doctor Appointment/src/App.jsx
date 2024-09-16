import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Settings from "./Settings"; // Import your settings component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar with Settings button */}
        <Routes>
          <Route path="/settings" element={<Settings />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
