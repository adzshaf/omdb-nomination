import React from "react";
import NominationSection from "./components/NominationSection";
import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import { useSelector } from "react-redux";
import { selectNomination } from "./features/nomination/nominationSlice";

function App() {
  const nomination = useSelector(selectNomination);

  return (
    <div className="App">
      {nomination.length === 5 && <Banner />}
      <Navbar />
      <NominationSection />
    </div>
  );
}

export default App;
