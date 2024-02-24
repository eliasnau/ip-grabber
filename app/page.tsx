"use client";
import { useEffect, useState } from "react";

function HomePage() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching IP address...");
    fetch("/api/getIP")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data:", data);
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  return (
    <div>
      <h1>Client IP Address:</h1>
      {ipAddress ? <p>{ipAddress}</p> : <p>Loading...</p>}
    </div>
  );
}

export default HomePage;
