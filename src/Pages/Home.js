import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Tasks from "../Components/Tasks/Tasks";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <div className="Home__layout">
        <Navbar />
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
