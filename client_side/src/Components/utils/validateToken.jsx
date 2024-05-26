import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useValidateToken = (redirectPath, fallbackPath) => {
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push(fallbackPath);
        return;
      }

      
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/auth/dashboard`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.status === 200) {
          history.push(redirectPath);
        } else {
          history.push(fallbackPath);
        }
      } catch (error) {
        history.push(fallbackPath);
      }
    };

    fetchData();
  }, [history, redirectPath, fallbackPath]);
};

export const useValidateSignupToken = () => {
  useValidateToken("/dashboard-panel", "/signup");
};

export const useValidateLoginToken = () => {
  useValidateToken("/dashboard-panel", "/login");
};

export const useValidateHomeToken = () => {
  useValidateToken("/dashboard-panel", "/");
};
