import React from "react";
import "./Tasks.css";

function Task({ title, description }) {
  return (
    <div class="Task">
      <span className="Task__title">{title}</span>
      <span className="Task__description">{description}</span>
    </div>
  );
}

export default Task;
