// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";

// Define the API route function
export default async function myRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Access client's IP address using req.socket.remoteAddress
  const detectedIp = req.socket.remoteAddress;

  // Now you can use the detectedIp as needed
  console.log("Client IP Address:", detectedIp);

  // Continue with the rest of your code

  // Send a response if needed
  res.status(200).json({ ip: detectedIp });
}
