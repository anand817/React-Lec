import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage title="Anand" />} />
        <Route path="second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
