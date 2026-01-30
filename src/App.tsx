import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Answer from "./pages/Answer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}
