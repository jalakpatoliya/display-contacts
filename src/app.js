const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("volleyball");
const Axios = require("axios");

app.use(cors());
app.use(logger);

/**
 * Routes
 */
app.get("/api/data", async (req, res) => {
  try {
    const { data } = await Axios.get(
      `https://books.zoho.com/api/v3/organizations?organization_id=${process.env.ORGANIZATION_ID}`,
      {
        headers: { Authorization: ` Zoho-authtoken  ${process.env.TOKEN}` },
      }
    );
    res.status(200).json({ status: "success", data });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
});

//Handle errors
// eslint-disable-next-line no-unused-vars
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({ error: err });
// });

module.exports = app;
