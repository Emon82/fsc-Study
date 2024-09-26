import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
import AboardCard from '../Component/StudyAbroadCard/AbroadCard';

function PhotoGellary() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Image Gallery" text="Gallery" />
      <AboardCard/>

      <Footer />
    </div>
  );
}

export default PhotoGellary
