import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
import SucessVedio from '../Component/SuccessStory/SuccessStory'

function VedioGellary() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Video Gallery" text="VIDEO" />
      <SucessVedio />
      <Footer />
    </div>
  );
}

export default VedioGellary
