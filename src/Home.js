import { useNavigate } from "react-router-dom";
import "./index.css"; //Will seperate CSS files be needed?
export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="head">
        <h1>MyMoviePal</h1>
        <p>
          MyMoviePal is a movie app that lets you select, rate, and log all of
          your favorite movies!
        </p>
      </div>
      <form class="form">
        {" "}
        <div class="container">
          <label for="sign-in-user-name">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            id="sign-in-user-name"
            name="sign-in-user-name"
          />
          <label for="sign-in-password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="sign-in-password"
            name="sign-in-password"
          />
          <button class="submit" onClick={() => navigate("/mymovies")}>
            Submit
          </button>
        </div>
      </form>
      <ul>
        <li>Enjoy viewing lists of every movie you have watched!</li>
        <li>Rate your favorite movie titles!</li>
        <li>Access to millions of titles from IMDB!</li>
        <li>Compile a list and organize it by a personal rating system!</li>
      </ul>
      <button className="signUp" onClick={() => navigate("/sign-up")}>
        Sign Up Here!
      </button>
    </div>
  );
}
