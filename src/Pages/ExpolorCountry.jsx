import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
import AboardCard from '../Component/StudyAbroadCard/AbroadCard'
function ExpolorCountry() {
  return (
    <div>
      <Navbar />
      <Banner title="Explore Countries" text="Explore Countries" />
      <AboardCard />
      <Footer />
    </div>
  );
}

export default ExpolorCountry
