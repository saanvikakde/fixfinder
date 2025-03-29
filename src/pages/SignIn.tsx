import { useState } from "react";
import "./SignIn.css";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";  

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
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
      console.log("Login success:", data.user);
      // TODO: redirect to dashboard, etc.
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
    
            {error && <p className="error-message">{error}</p>}

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