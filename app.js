const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/todo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middleware
app.use(express.urlencoded({ extended: true }));

// static routes
app.use(express.static("public"));

// view engine configuration
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/task"));

// server configuration
app.listen(3000, () => console.log("Server listening on port: 3000"));
