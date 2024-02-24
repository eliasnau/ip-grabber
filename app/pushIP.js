// pages/api/pushIP.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { ip } = req.body;

      // Process the received IP address as needed
      console.log("Received IP:", ip);

      // You can save the IP to a database or perform any other actions here

      res
        .status(200)
        .json({ success: true, message: "IP address received successfully" });
    } catch (error) {
      console.error("Error processing IP address:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
