import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./core/Home.js";

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
}
