import React, { useEffect } from "react";
import axios from "axios";

export const validateToken = (history, redirectPath, fallbackPath) => {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push(fallbackPath);
        return;
      }

      try {
        // await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/dashboard`, {
        //   headers: {
        //     Authorization: token,
        //   },
        // });
        history.push(redirectPath);
      } catch (error) {
        // console.log(error);
        history.push(fallbackPath);
      }
    };

    fetchData();
  }, [history, redirectPath, fallbackPath]);
};

export const validateSignupToken = (history) => {
  validateToken(history, "/dashboard-panel", "/signup");
};

export const validateLoginToken = (history) => {
  validateToken(history, "/dashboard-panel", "/login");
};

