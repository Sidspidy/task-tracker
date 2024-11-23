import React, { useState, useEffect } from "react";

const TaskForm = ({ onAddOrUpdateTask, editingTask }) => {
  const [task, setTask] = useState({
    id: null,
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    onAddOrUpdateTask(task);
    setTask({
      id: null,
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{task.id ? "Edit Task" : "Add Task"}</h4>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="form-control mb-2"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="form-control mb-2"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleInputChange}
        className="form-control mb-2"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="btn btn-primary">
        {task.id ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
