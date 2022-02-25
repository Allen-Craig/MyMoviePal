import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1>MyMoviePal</h1>
      <p>
        MyMoviePal is a movie app that lets you select, rate, and log all of
        your favorite movies!
      </p>
      <form>
        {" "}
        <label for="sign-in-user-name">User Name</label>
        <input type="text" id="sign-in-user-name" name="sign-in-user-name" />
        <label for="sign-in-password">Password</label>
        <input type="password" id="sign-in-password" name="sign-in-password" />
        <button>Submit</button>
      </form>
      <ul>
        <li>Enjoy viewing lists of every movie you have watched!</li>
        <li>Rate your favorite movie titles!</li>
        <li>Access to millions of titles from IMDB!</li>
        <li>Compile a list and organize it by a personal rating system!</li>
      </ul>
      <button onClick={() => navigate("/sign-up")}>Sign Up Here!</button>
    </div>
  );
}
