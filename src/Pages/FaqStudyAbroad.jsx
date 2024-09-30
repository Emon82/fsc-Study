import React from 'react';
import BannerComponent from '../Component/BannerComponent';
import Footer from '../Component/Footer/Footer';
import NavbarComponent from '../Component/Navbar/Navbar';

function FaqStudyAbroad() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Study Abroad FAQ" text="FAQ" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 className="section-title" style={{ color: "darkblue" }}>
              Know About Study Abroad: Frequently Asked Questions (FAQs)
            </h2>
            <p className="section-text">
              Deciding to study abroad is a life-changing choice that can
              significantly enhance an individual's prospects and opportunities.
              Here are some common questions and answers regarding studying
              abroad:
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              Why should I study abroad?
            </h4>
            <p className="section-text">
              Studying in a foreign country provides opportunities for
              multicultural exposure and diversification. It allows students to
              engage in a wide range of professional fields, opening up numerous
              career options due to the diverse academic programs offered by
              universities around the world.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              How do I choose the right study abroad program?
            </h4>
            <p className="section-text">
              Choosing the right program should be based on your academic goals,
              interests, and personal preferences. Start by researching
              universities to find the best fit in terms of program
              availability, costs, and potential career opportunities.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              Is studying abroad expensive?
            </h4>
            <p className="section-text">
              The cost of studying abroad can vary significantly based on the
              country, program, and individual lifestyle choices. Some
              universities may have high tuition fees, but there are
              scholarships and financial aid options available to help qualified
              students make their academic journey more affordable.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              How do a student can apply for a student visa?
            </h4>
            <p className="section-text">
              The process for obtaining a student visa differs by country.
              Generally, you'll need to provide proof of acceptance from an
              accredited institution, financial statements, a valid passport,
              and sometimes evidence of language proficiency. It's best to
              consult the embassy or consulate website of your chosen
              destination for specific requirements.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              What about language barriers?
            </h4>
            <p className="section-text">
              Language proficiency requirements depend on the program and
              destination. Many universities offer courses in English, while
              others may require language proficiency tests such as TOEFL or
              IELTS. Additionally, there are language programs available to help
              improve students' language skills before or during their studies.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              Can I work while studying abroad?
            </h4>
            <p className="section-text">
              In many countries, international students are allowed to work
              part-time while studying. Most countries permit students to work
              up to 20 hours per week, which can help cover living costs.
            </p>

            <h4 className="section-title" style={{ color: "darkblue" }}>
              How do I find accommodation abroad?
            </h4>
            <p className="section-text">
              Most universities provide accommodation options for international
              students, such as dormitories. Additionally, students can explore
              shared apartments or off-campus housing options, including
              homestays, to find suitable living arrangements near their
              universities.
            </p>

            <p className="section-text">
              {" "}
              This FAQ aims to provide essential information to help prospective
              students navigate the process of studying abroad and make informed
              decisions.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-5">
            <div className="card p-4 shadow-sm">
              <div className="" style={{ color: "darkblue" }}>
                <h4 className="section-title">
                  Interested in studying abroad with FSC?
                </h4>
                <p className="section-text">
                  Enter your details below and we'll call you back when it suits
                  you.
                </p>
              </div>

              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label section-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="phoneNumber"
                    className="form-label section-text"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label section-text">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="destination"
                    className="form-label section-text"
                  >
                    Your preferred study destination
                  </label>
                  <select
                    className="form-select section-text"
                    id="destination"
                    required
                  >
                    <option>Please Select Destination</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label section-text">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 section-text"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FaqStudyAbroad
