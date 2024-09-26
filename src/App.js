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
import ExpolorCountry from "./Pages/ExpolorCountry";
import StudyAborad from "./Pages/StudyAborad";
import GuidStudyAbroad from "./Pages/GuidStudyAbroad";
import BenifitStudyAbroad from "./Pages/BenifitStudyAbroad";
import FaqStudyAbroad from "./Pages/FaqStudyAbroad";
import ChoiceCourse from "./Pages/ChoiceCourse";
import FindUniversity from "./Pages/FindUniversity";
import UniversityRanking from "./Pages/UniversityRanking";
import Schollarship from "./Pages/Schollarship";
import IeltsSchore from "./Pages/IeltsSchore";
import StudyTrip from "./Pages/StudyTips";
import WhatToPack from "./Pages/WhatToPack";
import DealingWithStreet from "./Pages/DealingWithStreet";
import Networking from "./Pages/Networking";
import Developing from "./Pages/Developing";
import ManagingMoney from "./Component/Navbar/ManagingMoney";
import JobSeeking from "./Pages/JobSeeking";
import VedioGellary from "./Pages/VedioGellary";
import PhotoGellary from "./Pages/PhotoGellary";

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
        <Route path="/explore-country" element={<ExpolorCountry />} />
        <Route path="/study-abroad" element={<StudyAborad />} />
        <Route path="/guid-study-abroad" element={<GuidStudyAbroad />} />
        <Route path="/benifit-study-abroad" element={<BenifitStudyAbroad />} />
        <Route path="/faq-study-abroad" element={<FaqStudyAbroad />} />
        <Route path="/choose-course" element={<ChoiceCourse />} />
        <Route path="/find-university" element={<FindUniversity />} />
        <Route path="/university-ranking" element={<UniversityRanking />} />
        <Route path="/scholarship" element={<Schollarship />} />
        <Route path="/ielts-score" element={<IeltsSchore />} />
        <Route path="/study-trip" element={<StudyTrip />} />
        <Route path="/what-to-pack" element={<WhatToPack />} />
        <Route path="/dealing" element={<DealingWithStreet />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/developing" element={<Developing />} />
        <Route path="/managing-money" element={<ManagingMoney />} />
        <Route path="/job-seeking" element={<JobSeeking />} />
        <Route path="/vedio-gellary" element={<VedioGellary />} />
        <Route path="/photo-gellary" element={<PhotoGellary />} />
      </Routes>
    </Router>
  );
}

export default App;
