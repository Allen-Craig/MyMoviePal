import { useNavigate } from "react-router-dom";
import "./index";
export function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1>MyMoviePal</h1>
      <form>
        {" "}
        <label for="sign-up-user-name">
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
      </form>
      <div class="container">
        <div class="vertical-center">
          <button className="home-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
