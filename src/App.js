import React from "react";
import MainPage from "./pages";
import SharePage from "./pages/SharePage";
import { Router } from "@reach/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" toastOptions={{ duration: 1500 }} />
      <Router>
        <MainPage path="/" />
        <SharePage path="/share/:shareId" />
      </Router>
    </div>
  );
}

export default App;
