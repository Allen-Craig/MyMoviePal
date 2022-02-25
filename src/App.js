import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import * as React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
