import React from "react";
import logo from "./image/search.png";
import { Counter } from "./features/counter/Counter";
import NominationSection from "./components/NominationSection";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NominationSection />
    </div>
  );
}

export default App;
