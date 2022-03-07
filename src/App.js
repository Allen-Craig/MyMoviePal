import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import { MyMovies } from "./MyMovies";
import * as React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/mymovies" element={<MyMovies />} />
    </Routes>
  );
}

export default App;
