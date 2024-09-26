import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function Schollarship() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Scholarship" text="Scholarship" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Scholarships for International Student
            </h2>
            <p>
              FSC is the first organization in Bangladesh which born to fulfill
              ever growing demand for higher education in Bangladesh. This
              organization is guided by renowned local and international
              university, educationists. BSB provides guidance and assistances
              to Bangladesh student for full and partial International
              Scholarship to complete their Higher Education in abroad. At BSB,
              highly skilled and professional student advisors guide students to
              find out latest, comprehensive list of scholarship, grants and
              other educational awards provided by different international
              organizations and universities.
            </p>
             <div className="row">
        {/* Scholarship List Section */}
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-md-6">
              <h5>USA</h5>
              <hr />
              <h6>Government-funded</h6>
              <ul>
                <li>Fulbright Foreign Student Program</li>
                <li>Hubert Humphrey Fellowship Program</li>
              </ul>
              <h6>Non-governmental/Private</h6>
              <ul>
                <li>Abbey Road Summer Scholarships</li>
                <li>The Next Gen Scholarship Fund</li>
                <li>Tortuga Backpacks Study Abroad Scholarship</li>
                <li>David P. Shapiro Annual Leukaemia Scholarship</li>
                <li>University Entrance Scholarships</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>UK</h5>
              <hr />
              <h6>Government-funded</h6>
              <ul>
                <li>British Chevening Scholarships</li>
                <li>Commonwealth Scholarships for Developing Commonwealth Countries</li>
                <li>Commonwealth Shared Scholarship Scheme at UK Universities</li>
              </ul>
              <h6>Non-governmental</h6>
              <ul>
                <li>Euraxess UK</li>
                <li>CastleSmart Scholarship</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
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

export default Schollarship
