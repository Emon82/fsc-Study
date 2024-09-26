import React from 'react';
import Banner from '../Component/BannerComponent';
import Footer from '../Component/Footer/Footer';
import NavBar from '../Component/Navbar/Navbar';

function StudyAborad() {
  return (
    <div>
      <NavBar />
      <Banner title="Why Study Abroad" text="Study Abroad" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Best Experiences about Studying Abroad: Why Students Should
              Consider It
            </h2>
            <p>
              Studying abroad opens up many opportunities for a student to
              develop in professional and personal life. Students get the chance
              to experience a diversified culture that helps them grow on a
              global scale.
            </p>

            <h4 style={{ color: "darkblue" }}>Cultural Immersion</h4>
            <p>
              Studying abroad lets students explore a different culture along
              with different experiences. Diversified culture allows a student
              to widen his or her learning in a culture where different
              experiences will help to grow in life.
            </p>

            <h4 style={{ color: "darkblue" }}>Academic Excellence</h4>
            <p>
              Studying overseas enables students to study in top-ranked
              universities globally. Students also get a chance to learn under
              top faculties that allow them to be proficient in their field of
              study.
            </p>

            <h4 style={{ color: "darkblue" }}>Personal Growth</h4>
            <p>
              Leaving their comfort zone, students need to prepare for
              challenges. People from different nations push a student to become
              diversified in their life.
            </p>

            <h4 style={{ color: "darkblue" }}>Language Proficiency</h4>
            <p>
              The good thing about studying in a different nation is to learn
              their local language. Staying in an environment where a foreign
              language is spoken is the best way to learn it. Knowing multiple
              languages is the best way to grow in your career and open up new
              opportunities.
            </p>

            <h4 style={{ color: "darkblue" }}>Global Networking</h4>
            <p>
              Abroad study helps to build global friends and people in different
              phases of life. Therefore, it builds a strong network that helps
              an individual to get many career opportunities.
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

export default StudyAborad
