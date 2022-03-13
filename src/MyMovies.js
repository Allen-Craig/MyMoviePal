import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import data from "./input-data.json";

export function MyMovies() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [results, setResults] = useState(null);
  const [movie, setmovie] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Title: "",
    Year: "",
    Director: "",
    About: "",
    Rating: "",
  });
  const handleTitleSearch = (title) => {
    console.log("submit clicked: ", title);
    fetch(
      "http://www.omdbapi.com/?apikey=4f7bb29&t=" + encodeURIComponent(title)
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        console.log(data);
        setResults(data);
      });
  };
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
            <button type="submit">
              <b>add</b>
            </button>
          </form>
          <div>
            <label for="title-search">
              <b>Title Search</b>
            </label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Title Search"
              id="title-search"
              name="title-search"
            />
            <button onClick={() => handleTitleSearch(title)}>
              <b>Submit</b>
            </button>
            <div>
              {results ? (
                <div>
                  <p>{results.Title}</p>
                  <p>{results.Year}</p>
                  <p>{results.Plot}</p>
                  <p>{results.imdbRating}</p>
                </div>
              ) : null}
            </div>
          </div>
          <button className="home-button" onClick={() => navigate("/")}>
            <b>Back to Home Page</b>
          </button>
        </div>
      </div>
    </div>
  );
}
