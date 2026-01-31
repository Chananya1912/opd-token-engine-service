const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/tokenRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);