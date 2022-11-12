
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ThemeContext } from "./Context/ThemeContext";
import { LoginContext } from "./Context/LoginContext";
import { ModalContext } from "./Context/ModalContext";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userData, setUserData] = useState({});
  const [modalOpen, setModalOpen] = useState({
    addTask: false,
    editTask: false,
  });
  return (
    <LoginContext.Provider value={{ userData, setUserData }}>
      <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={darkMode ? "dark__theme" : "light__theme"}>
            {modalOpen.addTask && (
              <div className="App__addTask">
                <button
                  className="Add__close"
                  onClick={() =>
                    setModalOpen({
                      addTask: false,
                      editTask: false,
                    })
                  }
                >
                  X
                </button>
                <div className="App__form">
                  <h3>Add New Task</h3>
                  <label for="title">Title</label>
                  <input placeholder="e.g Take coffee break" />
                  <label for="description">Description</label>
                  <input
                    className="App__addTaskInput description"
                    placeholder="e.g This is a basic descrition, fill out the stuff here and you are good."
                  />
                  <div className="Add__addTask--subtasks">
                    <label for="Subtasks">Subtasks</label>
                    <div className="Add__addSubTaskCard">
                      <input placeholder="e.g Make coffee" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </div>
                    <div className="Add__addSubTaskCard">
                      <input placeholder="e.g Do dishes" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </div>
                    <button className="Add__button">+ Add New Subtask</button>
                  </div>
                </div>
              </div>
            )}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </ModalContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
