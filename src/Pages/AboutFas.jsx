import React from 'react';
import image1 from "../assect/About image/457146504_10222779031218835_840068712204095399_n.jpg";
import Footer from '../Component/Footer/Footer';
import NavbarComponent from '../Component/Navbar/Navbar';
import './About.css';
import BannerComponent from '../Component/BannerComponent';

function AboutFas() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="About FSC" text="ABOUT FSC" />
      <section>
        <div className="about-section py-5">
          <div className="container">
            <h2 className="text-primary">About FSC Global Network</h2>
            <div className="row">
              {/* Left Text Section */}
              <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                <p>
                  Education is the backbone of a nation. We strongly believe
                  that education is a fundamental right and everyone should have
                  access to quality higher education. Education is the best
                  option of investment for the families and the nation. It is
                  the only means of human resources development to meet the
                  upcoming challenges.
                </p>
                <p>
                  BSB Global Network is the leading National and International
                  Education Consultancy and Student Recruitment Agency of
                  Bangladesh. We assist and add value to the students through
                  counseling, advice and recruitment who are interested for
                  higher study in foreign universities. Our expert team always
                  maintains global standard high-quality services and
                  professionalism. We are working with the highest recognitions
                  and reputations since inception of the company in 1993.
                </p>
                <p>
                  The company already has established 23 sister concerns
                  educational institutes with around 10,000 students. Many of
                  these institutions are following standard British and American
                  curriculum. The sister concerns are thriving students from
                  pre-primary to pre-University level as international standard.
                  Students who graduated from these institutions are the most
                  potential hub of abroad universities and ready to fly and
                  enroll in.
                </p>
              </div>

              {/* Right Image Section */}
              <div className="col-lg-5 col-md-12">
                <img
                  src={image1}
                  alt="BSB Global Event"
                  className="img-fluid shadow rounded"
                />
              </div>
            </div>

            {/* Section 2: Our Vision, Mission, Goal, and Quality Policy */}
            <div className="row mt-5">
              <div className="col-12">
                <h3 className="text-primary">Our Vision</h3>
                <p>
                  Our vision is to be the leading student consultancy and
                  recruiting agency of the world by satisfying our clients’ in
                  all aspects.
                </p>

                <h3 className="text-primary">Our Mission</h3>
                <p>
                  BSB mission is to achieve excellence in business through
                  excellent services and new scopes for world-class education by
                  realizing dreams of our clients within their capacities.
                </p>

                <h3 className="text-primary">Our Goal</h3>
                <p>
                  Create opportunities of abroad higher study and improve
                  significantly family & position and national development and
                  to contribute to achieve Bangladesh as a middle income
                  country.
                </p>

                <h3 className="text-primary">Quality Policy</h3>
                <p>
                  We, as a team, are totally committed to customer satisfaction
                  through continuous improvement. BSB Global Network’s quality
                  policy is to achieve sustained, profitable growth by providing
                  services which consistently satisfy the needs and expectations
                  of its customers coordinating all staffs, who are individually
                  responsible for the quality of their work, resulting in a
                  continually improving working environment through adoption of
                  a system of procedures that reflect the competence of the
                  company to existing customers and potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutFas
