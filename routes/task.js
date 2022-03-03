const router = require("express").Router();
const Task = require("../models/Task");

router
    .post("/add/task", (req, res) => {
        const { task } = req.body;
        const newTask = new Task({
            task: task,
        });

        newTask
            .save()
            .then(() => {
                console.log("Task saved");
                res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .get("/delete/task/:_id", (req, res) => {
        const { _id } = req.params;
        Task.deleteOne({ _id: _id })
            .then(() => {
                console.log("Task deleted successfully");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    })
    .get("/edit/task/:_id", async (req, res) => {
        const { _id } = req.params;
        const task = await Task.findOne({ _id: _id });
        res.render("edit", { task: task });
    })
    .post("/edit/task/:_id", (req, res) => {
        const { _id } = req.params;
        const { task } = req.body;
        Task.update(
            { _id: _id },
            {
                $set: { task: task },
            }
        )
            .then(() => {
                console.log("Task updated");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    });

module.exports = router;
