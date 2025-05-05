import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import LoginButton from "../../Components/LoginButton";
import axios from "axios"; // Import axios here

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // useNavigate hook to handle redirects

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(null); // Clear error on input change
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null); // Clear error on input change
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Prevent default page reload!
    setIsLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Username and password are required.");
      setIsLoading(false);
      return; // Don't proceed if fields are empty
    }

    try {
      const response = await axios.post("/api/Login", {
        username,
        password,
      });
      console.log("Login Success:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Navigate to the controls page after successful login
        navigate("/controls"); 
      } else {
        setError("Login failed: No token received.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      if (err.response) {
        setError(err.response.data.message || "Login failed. Please check your credentials.");
      } else if (err.request) {
        setError("Login failed: Could not connect to server.");
      } else {
        setError("Login failed: An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-login">
      <h2 className="text-center">Login</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleLoginSubmit} className="login-form card bg-secondary-subtle shadow-lg">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <LoginButton
              type="submit"
              disabled={!username || !password || isLoading}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
