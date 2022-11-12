import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import "./Tasks.css";

function Task({ title, description }) {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <div>
      <div
        className="Task"
        onClick={(e) =>
          setModalOpen({
            addTask: false,
            editTask: true,
          })
        }
      >
        <span className="Task__title">{title}</span>
        <span className="Task__description">{description}</span>
      </div>
    </div>
  );
}

export default Task;
