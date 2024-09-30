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
            <h2 className="text-primary">About FSC </h2>
            <div className="row">
              {/* Left Text Section */}
              <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                <p>
                  Education is the backbone of a nation. We firmly believe that
                  access to quality higher education is a fundamental right for
                  all. Education represents the best investment for families and
                  the nation, serving as the primary means for developing human
                  resources to meet future challenges.
                </p>
                <p>
                  FSC is a premier national and international education
                  consultancy and student recruitment agency in Bangladesh. We
                  provide valuable support to students through counseling,
                  guidance, and recruitment for higher studies at foreign
                  universities. Our expert team is committed to delivering
                  high-quality services and maintaining professionalism that
                  meets global standards. Since our establishment in 1993, we
                  have built a strong reputation for excellence.
                </p>
                <p>
                  The company has established 23 affiliated educational
                  institutions, serving approximately 10,000 students. Many of
                  these institutions adhere to recognized British and American
                  curricula. Our sister concerns nurture students from
                  pre-primary through pre-university levels, ensuring they
                  receive an education that meets international standards.
                  Graduates from these institutions are well-prepared to pursue
                  opportunities at top universities abroad, ready to embark on
                  their academic journeys.
                </p>
              </div>

              {/* Right Image Section */}
              <div className="col-lg-5 col-md-12">
                <img
                  src={image1}
                  alt="FSC Global Event"
                  className="img-fluid shadow rounded"
                />
              </div>
            </div>

            {/* Section 2: Our Vision, Mission, Goal, and Quality Policy */}
            <div className="row mt-5">
              <div className="col-12">
                <h3 className="text-primary">Our Vision</h3>
                <p>
                  Our vision is to become the world’s leading student
                  consultancy and recruitment agency by fully meeting our
                  clients’ needs and expectations in every aspect of our
                  service.
                </p>

                <h3 className="text-primary">Our Mission</h3>
                <p>
                  FSC’s mission is to achieve excellence in business by
                  providing outstanding services and creating new opportunities
                  for world-class education, helping our clients realize their
                  dreams within their means.
                </p>

                <h3 className="text-primary">Our Goal</h3>
                <p>
                  We aim to create opportunities for higher education abroad,
                  significantly enhance family and individual positions, and
                  contribute to national development, ultimately working towards
                  achieving Bangladesh’s status as a middle-income country.
                </p>

                <h3 className="text-primary">Quality Policy</h3>
                <p>
                  As a team, we are fully dedicated to customer satisfaction
                  through ongoing improvement. FSC’s quality policy focuses on
                  achieving sustained, profitable growth by delivering services
                  that consistently meet the needs and expectations of our
                  clients. We coordinate efforts across all staff members, each
                  of whom is responsible for the quality of their work. This
                  collaborative approach fosters a continually improving work
                  environment, supported by a system of procedures that
                  demonstrate the company's competence to both current and
                  potential customers.
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
