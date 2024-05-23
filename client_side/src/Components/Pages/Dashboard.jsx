import axios from "axios";

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const URL = import.meta.env.VITE_SERVER_URL;
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${URL}/api/dashboard`, {
          headers: {
            Authorization: token,
          },
        });
        const data = response.data;
        // console.log(data);
      } catch (error) {
        // console.log(error);
        if (error) {
          history.push("/login");
        }
      }
    };
    fetchData();
  }, [history]);



  return ( <h1> Dashboard </h1> );
}

export default Dashboard;
