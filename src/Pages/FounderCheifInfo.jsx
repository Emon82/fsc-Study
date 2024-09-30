import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import image from '../assect/About image/cheif.jpg'
import Footer from '../Component/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function FounderCheifInfo() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        title="Founder & Chief Executive"
        text="Founder & Chief Executive"
      />

      <div className="about-section py-5 bg-light ">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8 text-center text-md-start">
                    <h2
                      className="text-primary mb-3"
                      style={{ fontFamily: "cursive", fontSize: "2.5rem" }}
                    >
                      A K M Ahmedul Islam Babu
                    </h2>
                    <p className="text-muted small mb-3">
                      FSC & Founder and Chairman, FSC-Cambrian
                      Education Group Vice President, Eastern European
                      Bangladesh Chamber of Commerce & Industry Founder Member,
                      Latin America Bangladesh Chamber of Commerce & Industry
                      Founder Chairman and Chief Advisor, FACD-CAB, Second
                      Century Ambassador and Past Council Chairperson Lion Club
                      International, MD 315, BD
                    </p>
                    <h3
                      className="text-primary"
                      style={{ fontFamily: "cursive", fontSize: "1.8rem" }}
                    >
                      Chief Executive
                    </h3>
                  </div>
                  <div className="col-md-4 mt-4 mt-md-0">
                    <img
                      src={image}
                      alt="Executive Portrait"
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section py-3 bg-light ">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-12 text-center text-md-start">
                    <p className="text-muted small mb-3">
                      FSC is a sister concern of the esteemed
                      FSC-Cambrian Education Group in Bangladesh, a leader in
                      education consultancy and student recruitment for higher
                      studies abroad. As the premier company in Bangladesh, we
                      provide a comprehensive range of services for studying
                      abroad in 32 countries, including the USA, Canada,
                      Australia, the UK, Germany, and more. Each year,
                      approximately one million students complete their HSC
                      (Higher Secondary Certificate, Grade 12 equivalent) from
                      various colleges. FSC-Cambrian Education Group supports
                      students in pursuing higher education both domestically
                      and internationally, earning their trust as their own
                      institution. We are a reliable organization for students
                      and guardians, known for our exceptional services. We
                      offer free counseling at local colleges and universities,
                      organize and sponsor various educational events and
                      programs. Consequently, around 20,000 students visit our
                      office annually, with 2,000 successfully enrolling in
                      study programs abroad. FSC is dedicated to
                      providing comprehensive educational services under the
                      motto, “One-Stop Solution for Higher Education at Home and
                      Abroad.” We are experts in arranging successful
                      enrollments in highly sought-after disciplines across
                      universities in various countries. We hope this profile
                      will be beneficial to students seeking to enroll in
                      foreign universities and to our valued global partners. I
                      would like to extend my heartfelt thanks to everyone
                      working diligently with us, especially Advocate Ln. Kh.
                      Salima Rowshan, the Executive Director of FSC Global
                      Network, who has sincerely led our efforts for the
                      brighter future of our students. Thank you, with best
                      regards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FounderCheifInfo
