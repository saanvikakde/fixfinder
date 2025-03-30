import { useState } from "react";
import "./SignIn.css";
import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom"; // added useNavigate for redirect

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // added success state
  const navigate = useNavigate(); // used to redirect

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("Login success:", data.user);

      setSuccess("Login successful."); // show success message

      // redirect to home after 1.5 seconds
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <Layout>
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>

          {success && <p className="success-message">{success}</p>} {/* success message */}
          {error && <p className="error-message">{error}</p>}       {/* error message */}

          <p className="signup-link">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up.
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
