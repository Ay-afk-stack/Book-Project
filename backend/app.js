require("dotenv").config();
require("./database/connection");

const express = require("express");
const app = express();
const port = process.env.PORT;
const bookRoute = require("./routes/book.route");

app.use(express.json());

app.use("/api", bookRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
