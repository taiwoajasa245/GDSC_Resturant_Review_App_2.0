import axios from "axios";

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../NavBars/Nav";

function Dashboard() {
  const URL = import.meta.env.VITE_SERVER_URL;
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`${URL}/api/auth/dashboard`, {
            headers: {
              Authorization: token,
            },
          });
        } else {
          history.push("/login");
        }
        // console.log(data);
      } catch (error) {
        console.log(error);
        // if (error) {
        //   history.push("/login");
        // }
      }
    };
    fetchData();
  }, [history]);

  return (
    <>
      <Nav />
      <h1> Dashboard </h1>
    </>
  );
}

export default Dashboard;
