import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Cards } from "../src/components/Cards";
import "./index.css";
import { Login } from "../src/components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
