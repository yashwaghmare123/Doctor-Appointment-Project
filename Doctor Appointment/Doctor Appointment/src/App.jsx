import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Profile from "./Profile";
import History from "./History";
import Settings from "./Settings"; // Import your settings component
import Pat from "./Pat";

function App() {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/History" element={<History />}></Route>
      <Route path="Settings" element={<Settings />}></Route>
      <Route path="Pat" element={<Pat />}></Route>
      

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
