import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useLogIn() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if the user is already logged in from sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("demo_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logIn = async (email, password) => {
    setLoading(true);
    setError("");
    try {
      // Simple validation for demo purposes
      if (email === "abc@gmail.com" && password === "123456") {
        const u = { id: "1", name: "Demo User", email };
        setUser(u);
        sessionStorage.setItem("demo_user", JSON.stringify(u));
        toast.success("Log In Succesfull");
        router.push("/");
      }
    } catch (e) {
      setError(e.message || "Login failed");
      toast.error(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("demo_user");
      toast.success("Logged Out Successfully");
      setUser(null);
    }
  };

  return { user, loading, error, logIn, logOut };
}
