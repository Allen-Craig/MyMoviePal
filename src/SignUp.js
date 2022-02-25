import { useNavigate } from "react-router-dom";
export function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1>MyMoviePal</h1>
      <form>
        {" "}
        <label for="sign-up-user-name">User Name</label>
        <input type="text" id="sign-up-user-name" name="sign-up-user-name" />
        <label for="sign-up-password">Password</label>
        <input type="password" id="sign-up-password" name="sign-up-password" />
        <label for="sign-up-user-email">User Email</label>
        <input type="text" id="sign-up-user-email" name="sign-up-user-email" />
        <button>Sign Up</button>
      </form>
      <button onClick={() => navigate("/")}>Back to Home Page</button>
    </div>
  );
}
