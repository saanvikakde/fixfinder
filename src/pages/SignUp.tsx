import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"; // reuse same CSS styles
import Layout from "@/components/Layout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("provider"); // or "user", depending on your logic
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      localStorage.setItem("token", data.token);
      console.log("Signup success:", data.user);
      // TODO: redirect to dashboard or homepage
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <Layout>
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSignup}>
          <h2>Create an Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="ASU Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Optional: Choose Role */}
          {/* 
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="provider">Service Provider</option>
            <option value="user">Service Seeker</option>
          </select> 
          */}

          <button type="submit" className="signin-button">
            Sign Up
          </button>

          {error && <p className="error-message">{error}</p>}

          <p className="signup-link">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in here.
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
