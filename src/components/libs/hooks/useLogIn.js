import { useEffect, useState } from "react";

export default function useLogIn() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if the user is already logged in from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("demo_user");
      if (raw) {
        setUser(JSON.parse(raw));
      }
    }
  }, []);

  const logIn = async (email, password) => {
    setLoading(true);
    setError("");
    try {
      // Simple validation for demo purposes
      if (email === "demo@site.com" && password === "123456") {
        const u = { id: "1", name: "Demo User", email };
        setUser(u);
        localStorage.setItem("demo_user", JSON.stringify(u));
        return u;
      }
      throw new Error("Invalid email or password");
    } catch (e) {
      setError(e.message || "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("demo_user");
      setUser(null);
    }
  };

  return { user, loading, error, logIn, logOut };
}
