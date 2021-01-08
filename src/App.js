import React from "react";
import MainPage from "./pages";
import SharePage from "./pages/SharePage";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage path="/" />
        <SharePage path="/share/:shareId" />
      </Router>
    </div>
  );
}

export default App;
