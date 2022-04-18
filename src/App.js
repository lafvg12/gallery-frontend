import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cards } from "../src/components/Cards";
import "./index.css";
import { Register } from "../src/components/Register";
import { SignIn } from "./components/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/Sign" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
