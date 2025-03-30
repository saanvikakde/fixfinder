import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // added useNavigate
import "./SignIn.css";
import Layout from "@/components/Layout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("provider");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // added for redirect

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error && data.error.includes("duplicate key")) {
          setError("An account with that email already exists.");
        } else {
          setError(data.error || "Something went wrong.");
        }
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("Signup success:", data.user);

      setSuccess("Account created successfully.");

      // redirect after 1.5 seconds
      setTimeout(() => navigate("/"), 1500);

      // reset form
      setName("");
      setEmail("");
      setPassword("");
      setRole("provider");
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

          <button type="submit" className="signin-button">
            Sign Up
          </button>

          {success && <p className="success-message">{success}</p>}
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
