import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Tasks from "../Components/Tasks/Tasks";
import Sidebar from "../Components/Sidebar/Sidebar";
function Home() {
  return (
    <div className="App__layout">
      <Sidebar />
      <div className="App__layout--responsive">
        <Navbar />
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
