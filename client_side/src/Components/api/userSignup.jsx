import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

const userSignUp = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    const URL = import.meta.env.VITE_SERVER_URL;

    try {
      setError("");
      setLoading(true);

      const res = await axios.post(`${URL}/api/auth/signup`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = res.data;
      if (data.status === 200) {
        login(data.token, data.user);
      } else if (data.status === 400) {
        setError(data.message);
      } else {
        setError("Registration Failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default userSignUp;
