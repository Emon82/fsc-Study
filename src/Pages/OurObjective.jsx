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
              We strongly believe that education is a fundamental right and
              everyone should have access to quality higher education. Education
              is the best option of investment for the families and the nation.
              It is the only means of human resources development to meet the
              upcoming challenges.
            </p>
            <p className="section-text">
              Serve and assist students to upgrade themselves as standard as a
              global citizen achieving higher education from renowned
              international universities.
            </p>
          </div>
        </div>

        {/* Targets Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Targets</h2>
            <p className="section-text">
              Continuous fulfillment of growing demands of our clients and
              partners, specific annual target of FSC Global Network is that
              20,000 students visit our office who seek admission in foreign
              universities. 70% of them (14,000) will be eligible and will open
              their files at FSC Global Network office and 40% of (5,600)
              students enroll in foreign universities and institutions.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Values</h2>
            <p className="section-text">
              Equal services, treatment and respect for all our clients and
              partners irrespective of their class, country, and position.
              Honesty, the highest level of transparency and confidentiality for
              our clients and parents at all levels of our operations.
            </p>
          </div>
        </div>

        {/* Policy of Excellence Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Policy of Excellence</h2>
            <p className="section-text">
              The FSC Global Network policy is to achieve sustainable and
              profitable growth by providing services, which consistently
              satisfy the needs and expectations of its customers. At FSC, we
              strive to deliver the best services with the most competitive
              rates. We are committed to customers’ satisfaction through
              continuous improvement.
            </p>
            <p className="section-text">
              We are determined to improve BQMS (FSC Quality Management System).
              Each staff of FSC Global Network is responsible for delivering
              quality work, which results in a continuously improving working
              environment by adopting a system that reflects the competence of
              the company.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OurObjective
