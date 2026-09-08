# To-Do List API

A simple REST API for a To-Do List app using Express.js.

## APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get one task |
| POST | /api/tasks | Add a task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Task Data

```json
{
    "id": 1,
    "title": "Learn Express.js",
    "completed": false
}