import logo from "./logo.svg";
import "./App.css";
import { useState, createContext, useContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Tasks from "./Components/Tasks/Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <ModalContext.Provider value={{modalOpen,setModalOpen}}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={darkMode ? "dark__theme" : "light__theme"}>
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
