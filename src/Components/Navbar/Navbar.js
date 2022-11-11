import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import "./Navbar.css";
function Navbar() {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  return (
    <div className="Navbar">
      <span className="Navbar__heading">Platform Launch</span>
      <div className="Navbar__buttons">
        <button className="Navbar__addTask" onClick={() => {}}>
          + Add New Task
        </button>
        <button className="Navbar__menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-grip-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
