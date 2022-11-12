import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Sidebar.css";
function Sidebar() {
  const sidebar = useRef(null);
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  return (
    <div className="Sidebar" ref={sidebar}>
      <div className="Sidebar__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(119, 78, 158)"
          class="bi bi-box-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
          />
        </svg>
        <span>Kanban</span>
      </div>

      <div className="Sidebar__boards">
        <div className="Sidebar__board heading">ALL BOARDS (8) </div>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="Sidebar__board active">Platform Launch</div>
        </Link>
        <div className="Sidebar__board">Marketing Plan</div>
        <div className="Sidebar__board">Roadmap</div>
        <div className="Sidebar__board create">+Create New Board</div>
      </div>

      <div className="Sidebar__bottomContent">
        <div
          className="Sidebar__themeToggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className="Sidebar__moon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          </div>
          <div className="Sidebar__switch">Switch</div>
          <div className="Sidebar__day">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sun-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </div>
        </div>
        <div
          className="Sidebar__hideSidebar"
          onClick={() => sidebar.current.classList.add("hidden")}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
