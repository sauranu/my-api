const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

// PNR Status API
app.get("/pnr/:pnrNumber", async (req, res) => {
  try {
    const response = await axios.get(
      `https://example-railway-api/pnr/${req.params.pnrNumber}`,
      {
        headers: {
          "X-RapidAPI-Key": "YOUR_API_KEY",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch PNR status" });
  }
});

// Live Train Status
app.get("/train/:trainNumber", async (req, res) => {
  try {
    const response = await axios.get(
      `https://example-railway-api/train/${req.params.trainNumber}`,
      {
        headers: {
          "X-RapidAPI-Key": "60efdbf79fmsh98161575e1c1ebfp1920e6jsn48b39c713917",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch train status" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
