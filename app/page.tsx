"use client";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ip, setIP] = useState("");

  const getDataAndSendToAPI = async () => {
    try {
      const res = await axios.get("https://api64.ipify.org/?format=json");
      console.log(res.data);
      setIP(res.data.ip);

      // Call your API to push the IP
      await axios.post("http://localhost:3000/api/ip", { ip: res.data.ip });
      console.log(
        "API http://localhost:3000/api/ip called with IP:",
        res.data.ip
      );
    } catch (error) {
      console.error("Error fetching IP address or pushing to your API:", error);
    }
  };

  useEffect(() => {
    getDataAndSendToAPI();
  }, []);

  return (
    <div className="App">
      <h2>Canot find Brawlstars.</h2>
      <h4> Error: {ip}</h4>
    </div>
  );
}

export default App;
