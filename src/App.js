import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cards } from "../src/components/Cards";
import "./index.css";
import { Register } from "../src/components/Register";
import { SignIn } from "./components/SignIn";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
