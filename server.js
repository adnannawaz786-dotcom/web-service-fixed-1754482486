const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Web Service!</h1><p>This is deployed as a web service, not static site.</p>");
});

app.listen(port, () => {
  console.log(`Web service running on port ${port}`);
});