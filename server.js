const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();
const port = process.env.PORT || 5000;

//Db Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongoose Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log("Server is running on port " + port));
