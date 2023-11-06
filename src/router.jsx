import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Transaction from "./Components/Transaction";

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;
