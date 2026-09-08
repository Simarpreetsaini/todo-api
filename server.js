const express = require("express");

const app = express();
const PORT = process.env.PORT|| 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
    const task = tasks.find(task => task.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
});

app.post("/api/tasks", (req, res) => {
    const task = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

app.put("/api/tasks/:id", (req, res) => {
    const task = tasks.find(task => task.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title;
    task.completed = req.body.completed;

    res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
    const index = tasks.findIndex(task => task.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(index, 1);

    res.json({ message: "Task deleted" });
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});