import { useNavigate } from "react-router-dom";
import "./index";


export function SignUp() {
  const navigate = useNavigate();


  return (
    <div>
      {" "}
      <div className="head">
        <h1>MyMoviePal</h1>
        <p>
          Sign up by entering your Email and creating a Password
          to see all of your favorite movies!
        </p>
      </div>
      <form>
        {" "}
        <div class="container">
          <label for="sign-in-user-name">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
            id="sign-up-user-name"
            name="sign-up-user-name"
          />
          <label for="sign-up-password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="sign-up-password"
            name="sign-up-password"
          />
          <label for="sign-up-user-email">
            <b>User Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="sign-up-user-email"
            name="sign-up-user-email"
          />
          <button>Sign Up</button>
        </div>
      </form>
      <div class="button2">
        <button className="home-button" onClick={() => navigate("/")}>
          <b>Back to Home Page</b>
        </button>
      </div>
    </div>
  );
};
