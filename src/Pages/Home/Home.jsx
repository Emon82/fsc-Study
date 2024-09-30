import React from 'react'
import Event from '../../Component/Event/Event'
import Footer from '../../Component/Footer/Footer'
import Carousel from '../../Component/HomeCarosul/Carosul'
import Navbar from '../../Component/Navbar/Navbar'
import Progress from '../../Component/ProgressBar/Progress'
import AbroadCard from '../../Component/StudyAbroadCard/AbroadCard'
import SuccessStory from '../../Component/SuccessStory/SuccessStory'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <h2 style={{ textAlign: "center", padding: "15px", margin: "10px" }}>
        Visa Success Story
      </h2>
      <SuccessStory />

      <h2 style={{ textAlign: "center", padding: "15px", margin: "10px" }}>
        Event
      </h2>
      <Event />
      {/* <Progress /> */}
      <h2 style={{ textAlign: "center", padding: "15px", margin: "10px" }}>
        Study Abroad Destinations  
      </h2>

<AbroadCard/>

      <Footer />
    </div>
  );
}

export default Home
