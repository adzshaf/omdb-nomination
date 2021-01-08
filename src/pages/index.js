import React from "react";
import NominationSection from "../components/NominationSection";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import { selectNomination } from "../features/nomination/nominationSlice";

function MainPage() {
  const nomination = useSelector(selectNomination);

  return (
    <div className="App">
      {nomination.length === 5 && <Banner />}
      <Navbar />
      <NominationSection isShared={false} />
    </div>
  );
}

export default MainPage;
