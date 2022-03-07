import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./index.css"; //Will seperate CSS files be needed?
import data from "./input-data.json";

export function MyMovies() {
  const navigate = useNavigate();

  const [movie, setmovie] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Title: "",
    Year: "",
    Director: "",
    About: "",
    Rating: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  return (
    <div className="table-container">
      {" "}
      <div className="head">
        <h1>MyMoviePal</h1>
        <p>
          Here is a list of all of your current movies, please take time to add
          your ratings and share with others!
        </p>
      </div>
      <div class="container">
        <div class="vertical-center">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>About this movie...</th>
                <th>My Rating</th>
              </tr>
            </thead>
            <tbody>
              {movie.map((info) => (
                <tr>
                  <th>{info.Title}</th>
                  <th>{info.Year}</th>
                  <th>{info.Director}</th>
                  <th>{info.About}</th>
                  <th>{info.Rating}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Add a Movie Title</h3>
          <form>
            <input
              type="text"
              name="Title"
              required="required"
              placeholder="Enter a Movie Title..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="Year"
              required="required"
              placeholder="Enter the movie Year..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="Director"
              required="required"
              placeholder="Enter the Directors name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="About"
              required="required"
              placeholder="Enter the Movie description..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="Rating"
              required="required"
              placeholder="Enter your Rating for this movie..."
              onChange={handleAddFormChange}
            />
            <button type="submit">add</button>
          </form>

          <button className="home-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
