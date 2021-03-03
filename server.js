const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error : console.log("server is running")
);
const authRouter = require("./routes/auth");
// connect DB
dbConnect();
//body parse midware
app.use(express.json());
//create route
app.use("/api/recipe", require("./routes/recipes"));
app.use("/api/user", require("./routes/users"));
app.use("/api/auth", authRouter);
