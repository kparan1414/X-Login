import { useState } from "react";
import "./App.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username === "user" && data.password === "password") {
      setIsSubmitted(true);
    } else {
      setErr("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p>Invalid username or password</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              required
              id="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              required
              id="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
