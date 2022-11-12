import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Tasks from "../Components/Tasks/Tasks";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="Home__sidebar">
        <Sidebar />
      </div>
      <div className="Home__layout">
        <div className="Home__navbar">
          <Navbar />
        </div>
        <div className="Home__tasks">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default Home;
