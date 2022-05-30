import React from "react";
import "./App.css";
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";

function App() {
  return (
    <div className="app">
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  );
}

export default App;
