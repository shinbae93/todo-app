const router = require("express").Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
    const allTasks = await Task.find();
    res.render("index", { task: allTasks });
});

module.exports = router;
