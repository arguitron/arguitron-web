import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Resume } from "./components/Resume";

export const ARGuitron = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Resume />} />
      </Routes>
    </Router>
  );
};
