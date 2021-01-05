import React from "react";
import logo from "./image/search.png";
import { Counter } from "./features/counter/Counter";
import EmptyState from "./components/EmptyState";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmptyState />
    </div>
  );
}

export default App;
