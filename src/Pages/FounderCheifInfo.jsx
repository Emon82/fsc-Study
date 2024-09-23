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
                      FSC Global Network & Founder and Chairman, FSC-Cambrian
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
                      FSC Global Network is a sister concern of a renowned
                      education group, “FSC-Cambrian Education Group” of
                      Bangladesh which is very successful in education
                      consultancy and student recruitment for higher study in
                      abroad. It is the leading company in Bangladesh, provides
                      all kinds of necessary services for abroad education in 32
                      countries including USA, Canada, Australia, UK, Germany
                      etc. According to the statistics every year some of one
                      million students pass HSC (Higher Secondary Certificate,
                      Grade 12 equivalent) from different Colleges. FSC-Cambrian
                      Education Group helps interested students to complete
                      their higher education in home and abroad and feel more
                      trustworthy as it is their own institute. FSC is the
                      trusted organization by the students and guardians for our
                      excellent services. We offer continually free counseling
                      at local colleges and universities, arranging and
                      sponsoring different educational events and programs. As a
                      result, yearly approximately 20,000 students visit our
                      office where 2000 students successfully enroll for abroad
                      study. FSC Global Network dedicated to provide the total
                      education services with the motto “One stop solution for
                      higher education at home and abroad.” We are expert,
                      efficient and committed to arrange successful enrollment
                      in highly demandable disciplines in any university in any
                      country desired by the students. We hope information of
                      this profile would be more conducive to the students who
                      are trying to enroll in foreign universities also for our
                      valued global partners. I acknowledge my heartiest thanks
                      to all who are working hard with us and specially involved
                      in preparing this profile. Specially many thanks to the
                      Executive Director, FSC Global Network Advocate Ln. Kh.
                      Salima Rowshan who worked sincerely and took the lead for
                      our future bright students. Thanks with best Regards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FounderCheifInfo
