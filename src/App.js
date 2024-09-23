import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event from "./Component/Event/Event";
import EventCardDetail from "./Component/Event/EvenCardDetails";
import Home from "./Pages/Home/Home";
import AboutFas from "./Pages/AboutFas";
import FounderCheifInfo from "./Pages/FounderCheifInfo";
import Counselor from "./Pages/Counselor";
import OurObjective from "./Pages/OurObjective";
import Collboration from "./Pages/Collboration";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-detail" element={<EventCardDetail />} />
        <Route path="/about-fsc" element={<AboutFas />} />
        <Route path="/founder-info" element={<FounderCheifInfo />} />
        <Route path="/fsc-counselor" element={<Counselor />} />
        <Route path="/our-objective" element={<OurObjective />} />
        <Route path="/collaboration" element={<Collboration />} />
        <Route path="/services-facilities" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
