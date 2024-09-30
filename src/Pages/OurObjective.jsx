import React from 'react';
import Banner from '../Component/BannerComponent';
import Footer from '../Component/Footer/Footer';
import NavbarComponent from '../Component/Navbar/Navbar';
import './OurObjective.css';
import "bootstrap/dist/css/bootstrap.min.css";
function OurObjective() {
  return (
    <div>
      <NavbarComponent />
      <Banner title="FSC Objectives" text="FSC Objectives" />
      <div className="container card p-4 my-5 bg-light  shadow">
        {/* Objectives Section */}
        <div className="  row ">
          <div className="col-12 ">
            <h2 className="section-title">Objectives</h2>
            <p className="section-text">
              We firmly believe that education is a fundamental right, and
              everyone deserves access to quality higher education. Education is
              not only the best investment for families and nations but also the
              most effective way to develop human resources to meet future
              challenges.
            </p>
            <p className="section-text">
              Our mission is to serve and guide students, helping them elevate
              themselves to the standards of global citizens by obtaining higher
              education from prestigious international universities.
            </p>
          </div>
        </div>

        {/* Targets Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Targets</h2>
            <p className="section-text">
              To continuously meet the growing demands of our clients and
              partners, FSC has set a specific annual target: we aim for 20,000
              students to visit our office seeking admission to foreign
              universities. Out of these, we anticipate that 70% (14,000
              students) will qualify and initiate their applications at our
              office. Ultimately, we project that 40% (5,600 students) will
              successfully enroll in various foreign universities and
              institutions.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Values</h2>
            <p className="section-text">
              We are committed to providing equal services, treatment, and
              respect to all our clients and partners, regardless of their
              class, country, or position. Our principles emphasize honesty, the
              highest level of transparency, and confidentiality for our clients
              and their families throughout all aspects of our operations.
            </p>
          </div>
        </div>

        {/* Policy of Excellence Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Policy of Excellence</h2>
            <p className="section-text">
              The FSC policy is centered around achieving sustainable and
              profitable growth by consistently providing services that meet the
              needs and expectations of our customers. At FSC, we are dedicated
              to delivering top-notch services at the most competitive rates,
              with a strong commitment to customer satisfaction through ongoing
              improvement.
            </p>
            <p className="section-text">
              We are focused on enhancing the BQMS (FSC Quality Management
              System). Each staff member at FSC is accountable for delivering
              high-quality work, contributing to a continuously improving work
              environment by implementing a system that showcases the company's
              competence.    
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OurObjective
