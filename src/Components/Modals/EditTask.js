import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import "../Tasks/Tasks.css";
function EditTask({ title, description }) {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <div className="Edit__modal">
      <button
        onClick={(e) =>
          setModalOpen({
            editTask: false,
            addTask: false,
          })
        }
      >
        X
      </button>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <div className="Edit__subtasks">
        <h5>Subtasks (2 of 3)</h5>
        <div>
          <label>
            SubTask 1
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <label>
            SubTask 2
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <label>
            SubTask 3
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
