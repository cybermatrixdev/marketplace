import React from "react";
import { Toaster } from "react-hot-toast";
import { HashRouter } from "react-router-dom";

import { Routes } from "./pages/routes";

function App() {
  return (
    <div className="container mx-auto">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
