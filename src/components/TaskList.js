import React from "react";

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-4 mb-4" key={task.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Due: {task.dueDate || "No Date"}
              </h6>
              <p className="card-text">
                {task.description || "No description provided."}
              </p>
              <span
                className={`badge ${
                  task.status === "Completed"
                    ? "bg-success"
                    : task.status === "In Progress"
                    ? "bg-warning text-dark"
                    : "bg-secondary"
                }`}
              >
                {task.status}
              </span>
              <div className="mt-3">
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEditTask(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
