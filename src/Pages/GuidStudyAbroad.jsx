import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function GuidStudyAbroad() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        title="FSC Guide to Study Abroad"
        text="FSC Guide Line"
      />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              The Ultimate Study Abroad Guide: Experts Tips from the best Study
              Abroad Agency in Bangladesh
            </h2>
            <p>
              Planning for a study abroad journey is a big decision, which is
              why consulting with experts can make the process smoother and more
              effective. In this life journey, FSC Global Network can be the
              ultimate guide.
            </p>

            <h4 style={{ color: "darkblue" }}>Focusing on Goals</h4>
            <p>
              The first step in the study abroad journey is to define a goals.
              students needs to understand why he or she want to study abroad
              and what a student hope to achieve. Consulting with FSC Global
              Network can help you align your goals with suitable programs and
              destinations.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Researching Universities and Programs
            </h4>
            <p>
              FSC Global Network have partnered with global universities and
              study programs worldwide. Whether students dream of studying in
              Canada, Australia, USA and many more. FSC Global Network can guide
              students to the perfect fit to fulfil dreams.
            </p>

            <h4 style={{ color: "darkblue" }}>Assist in Financial Planning</h4>
            <p>
              FSC Global Network can support students guiding the financial
              aspects by giving authentic information about scholarships,
              grants, and loans. We also guide students in managing a realistic
              budget for expenses while staying overseas
            </p>

            <h4 style={{ color: "darkblue" }}>
              Visa and Documentation Assistance
            </h4>
            <p>
              Guiding the visa application process and ensuring that students
              have all the required documentation can be critical. FSC Global
              Network have long experience in dealing with visa application
              process and can provide you navigation on the necessary paperwork,
              interviews, and visa requirements for your chosen destination.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Preparing for Cultural Adjustment
            </h4>
            <p>
              Adapting to a new culture can be challenging, but it's an integral
              part of the study abroad experience. FSC Global Network can
              provide you with cultural orientation sessions and tips on how to
              integrate seamlessly into your host country. This preparation will
              help you make the most of your study abroad adventure from day
              one.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-5">
            <div className="card p-4 shadow-sm">
              <div className="" style={{ color: "darkblue" }}>
                <h4>Interested in studying abroad with FSC?</h4>
                <p>
                  Enter your details below and we'll call you back when it suits
                  you.
                </p>
              </div>

              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
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
                  <label htmlFor="phoneNumber" className="form-label">
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
                  <label htmlFor="email" className="form-label">
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
                  <label htmlFor="destination" className="form-label">
                    Your preferred study destination
                  </label>
                  <select className="form-select" id="destination" required>
                    <option>Please Select Destination</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100">
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

export default GuidStudyAbroad
