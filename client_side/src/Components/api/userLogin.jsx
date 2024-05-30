import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios"; // Import axios

const userLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const logUserIn = async (values) => {
    setLoading(true);
    setError("");
    const URL = import.meta.env.VITE_SERVER_URL;


    try {
      const res = await axios.post(
        `${URL}/api/auth/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = res.data;
      console.log(data);
      if (res.status === 200) {
        login(data.token, data.user);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        setError("Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, logUserIn };
};

export default userLogin;
