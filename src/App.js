import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event from "./Component/Event/Event";
import EventCardDetail from "./Component/Event/EvenCardDetails";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-detail" element={<EventCardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
